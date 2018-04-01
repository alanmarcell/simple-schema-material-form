import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState } from 'recompose';
import { FormControl } from 'material-ui/Form';
/** Our Simple Form */
const Form = ({ children }) => {
  return (
    <FormControl >
      {children}
    </FormControl>
  );
};

Form.defaultProps = {
  children: null,
};

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const enhanche = compose(withState('doc', 'setDoc', {}));

export default enhanche(Form);
