import React from 'react';
import { branch, renderComponent } from 'recompose';
import { isNil } from 'ramda';

const DefaultField = props => {
  const { helperText, error, ...rest } = props;

  return (
    <div>
      <label>
        {helperText}
      </label>
      <div>
        <input {...rest} />
      </div>
    </div>
  );
};

const CustomField = ({ Component, ...props }) => {
  return <Component {...props} />;
};

const renderSubmitButton = isDefaultButton =>
  branch(
    isDefaultButton,
    renderComponent(DefaultField),
  );

const enhance = renderSubmitButton(props =>
  isNil(props.Component));

export default enhance(CustomField);
