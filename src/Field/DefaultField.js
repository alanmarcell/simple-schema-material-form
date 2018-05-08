import React from 'react';

export default props => {
  const {
    helperText, error, fieldName, ...rest
  } = props;

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
