import React from 'react';
import PropTypes from 'prop-types';

const TextInput = props => {
  console.log('TextInput >>>', props);
  return <input {...props} />;
};

TextInput.defaultProps = {
  value: '',
};

TextInput.propTypes = {
  value: PropTypes.string,
  doc: PropTypes.object.isRequired,
  setDoc: PropTypes.func.isRequired,
};

export default TextInput;
