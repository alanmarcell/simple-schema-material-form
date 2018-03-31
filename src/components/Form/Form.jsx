import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState } from 'recompose';

/** Our Simple Form */
const Form = ({ name }) => {
  return (
    <form >
      {name}
    </form>
  );
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
};

const enhanche = compose(withState('doc', 'setDoc', {}));

export default enhanche(Form);
