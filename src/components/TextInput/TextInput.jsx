import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MUITextField } from 'material-ui';
import { compose, withState } from 'recompose';

/**
 * Component is described here.
 *
 */
const TextField = ({
  fieldName, value, setvalue, ...props
}) => {
  return (
    <MUITextField label={fieldName} onChange={evt => setvalue(evt.target.value)} value={value} {...props} />);
};

TextField.defaultProps = {
  value: 'Initial',
};

TextField.propTypes = {
  value: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
};

const enhanche = compose(withState('value', 'setvalue', ({ value }) => value));

export default enhanche(TextField);
