import React from 'react';
import { branch, renderComponent } from 'recompose';
import { isNil } from 'ramda';
import handleSubmit from './submitHandler';

const submitProps =
  ({ formProps, ...props }) => ({
    ...props,
    onClick: () => handleSubmit(formProps),
  });

const CustomSubmitButton = ({ Component, ...props }) => {
  return (
    <Component {...submitProps(props)} >
      Submit
    </Component>
  );
};

const DefaultSubmitButton = props => {
  return (
    <button type="button" {...submitProps(props)} >
      Submit
    </button>
  );
};

const renderSubmitButton = isDefaultButton =>
  branch(
    isDefaultButton,
    renderComponent(DefaultSubmitButton),
  );

const enhance = renderSubmitButton(props =>
  isNil(props.Component));

export default enhance(CustomSubmitButton);
