import React from 'react';
// import PropTypes from 'prop-types';
import { omit, pathOr } from 'ramda';
// import { compose, withStateHandlers, pure } from 'recompact';
import { TextField } from 'material-ui';


const TextInput = props => {
  const { doc, setDoc, fieldName } = props;
  const value = pathOr('', [fieldName], doc);
  const cProps = omit(['fieldName', 'setDoc', 'doc'], props);

  const inputProps = {
    ...cProps,
    onChange: e => setDoc({ [fieldName]: e.target.value }),
    value,
    label: fieldName,
  };
  return <TextField {...inputProps} />;
};

export default TextInput;
