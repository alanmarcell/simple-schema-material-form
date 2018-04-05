import React from 'react';
import PropTypes from 'prop-types';
import { pathOr } from 'ramda';
import { compose, pure, setDisplayName, mapProps } from 'recompact';
import { TextField } from 'material-ui';

const TextInput = props => {
  return <TextField {...props} />;
};

const enhance = compose(
  pure,
  setDisplayName('TextInput'),
  mapProps(({
    fieldName, doc, setDoc, ...props
  }) => ({
    label: fieldName,
    value: pathOr('', [fieldName], doc),
    onChange: e => setDoc({ [fieldName]: e.target.value }),
    ...props,
  })),
);

const EnhancedTextInput = enhance(TextInput);

TextInput.defaultProps = {
  value: '',
};

TextInput.propTypes = {
  value: PropTypes.string,
  doc: PropTypes.object.isRequired,
  setDoc: PropTypes.func.isRequired,
};

export default EnhancedTextInput;
