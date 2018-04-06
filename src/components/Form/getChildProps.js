import React from 'react';
import { pathOr, isNil, isEmpty, filter } from 'ramda';

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


const getChildProps = ({ doc, setDoc, errors }) => Child => {
  const { fieldName } = Child.props;
  const value = pathOr('', [fieldName], doc);

  const childProps = {
    ...Child.props,
    setDoc,
    doc,
    error: hasError(errors, fieldName),
    value,
    label: fieldName,
  };

  return React.createElement(
    Child.type,
    childProps,
    null,
  );
};

export default getChildProps;
