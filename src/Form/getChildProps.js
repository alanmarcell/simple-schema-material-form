import React from 'react';
import { pathOr, isNil, is, curry, find, propEq } from 'ramda';
import { getDisplayName } from 'recompose';

import validateField from './validateForm';

const fieldPropsFactory = curry((props, fieldName) => {
  const {
    doc, setDoc, errors, schema, addError, onSubmit,
  } = props;

  const value = pathOr('', [fieldName], doc);
  const helperText = find(propEq('name', fieldName), errors);
  const error = !isNil(helperText);

  const childProps = {
    setDoc,
    doc,
    onBlur: () => validateField({
      schema, doc, addError, fieldName,
    }),
    helperText: helperText && helperText.message,
    error,
    value,
    label: fieldName,
    onSubmit,
  };

  return childProps;
});

const shouldRenderFactory = curry((render, Child) => {
  if (!Child || !is(Object, Child)) {
    return Child;
  }

  if (Child.props.children) {
    return React.Children.map(Child.props.children, render);
  }
  return false;
});

const hasFieldName = (Child, childProps, render) => {
  if (!Child.props.fieldName) {
    const factoryProps = Child.type(childProps);

    if (!factoryProps.props.fieldName) {
      return Child;
    }
    return render(factoryProps);
  }
  return false;
};

const getChildProps = curry((propsFactory, Child) => {
  const { fieldName } = Child.props;

  const childProps = {
    ...Child.props,
    ...propsFactory(fieldName),
  };

  return React.createElement(
    Child.type,
    childProps,
    null,
  );
});

const renderChild = props => Child => {
  const { render, shouldRender, propsFactory } = props;
  const dysplayName = getDisplayName(Child.type);

  if (dysplayName === 'SubmitButton') {
    const submitProps = {
      ...Child.props,
      formProps: props.formProps,
    };

    return React.createElement(
      Child.type,
      submitProps,
      null,
    );
  }
  debugger
  const childIsNotFieldType = shouldRender(Child);

  if (childIsNotFieldType) {
    return childIsNotFieldType;
  }

  const { fieldName } = Child.props;
  const childProps = {
    ...Child.props,
    ...propsFactory(fieldName),
  };
  const hasNotFieldName = hasFieldName(Child, childProps, render);


  if (hasNotFieldName) {
    return hasNotFieldName;
  }

  return render(Child);
};

const formPropsFactory = props => {
  const propsFactory = fieldPropsFactory(props);

  const render = getChildProps(propsFactory);
  const shouldRender = shouldRenderFactory(render);

  return {
    formProps: props,
    render,
    shouldRender,
    propsFactory,
  };
};

const childPropsFactory = formProps =>
  renderChild(formPropsFactory(formProps));

export { formPropsFactory };
export default childPropsFactory;
