import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState } from 'recompose';
import { FormControl } from 'material-ui/Form';
/** Our Simple Form */
const Form = ({ name, children }) => {
  return (
    <FormControl >
      {children}
    </FormControl>
  );
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
};

const enhanche = compose(withState('doc', 'setDoc', {}));

export default enhanche(Form);
