import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';
import { withStateHandlers, compose } from 'recompose';

/**
 * Component is described here.
 *
 */
const component = ({ value, onChange }) => (
  <div>
    <TextField type="text" label={value} value={value} onChange={onChange} />
    <p>
      {value}
    </p>
  </div>
);

const enhance = compose(withStateHandlers(
  { value: '' },
  {
    onChange: () => e => ({
      value: e.target.value,
    }),
  },
));

const TextInput = enhance(component);

TextInput.defaultProps = {
  value: 'Initial',
};

TextInput.propTypes = {
  value: PropTypes.string,
};

export default TextInput;
