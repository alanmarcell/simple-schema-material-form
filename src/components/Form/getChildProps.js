import React from 'react';
import { pathOr, isNil, isEmpty, filter, is, curry } from 'ramda';
import { validateField } from './validateForm';

const getFieldError = fieldName => error => {
  if (error.name === fieldName) {
    return error;
  }
  return null;
};

const hasError = (errors = [], fieldName) => {
  if (isNil(errors)) {
    return false;
  }

  return !isEmpty(filter(getFieldError(fieldName), errors));
};

const fieldPropsFactory = curry((props, fieldName) => {
  const {
    doc, setDoc, errors, schema, addError,
  } = props;

  const value = pathOr('', [fieldName], doc);
  const childProps = {
    // ...Child.props,
    setDoc,
    doc,
    onBlur: () => validateField({
      schema, doc, addError, fieldName,
    }),
    error: hasError(errors, fieldName),
    value,
    label: fieldName,
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

  // if (Child.type.prototype instanceof React.Component) {
  //   return Child;
  // }


  return React.createElement(
    Child.type,
    childProps,
    null,
  );
});

const renderChild = props => Child => {
  const { render, shouldRender, propsFactory } = props;

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
    render,
    shouldRender,
    propsFactory,
  };
};

export { formPropsFactory };
export default renderChild;
