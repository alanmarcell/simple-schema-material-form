import React from 'react';
import PropTypes from 'prop-types';
import { compose, withStateHandlers, pure } from 'recompact';
import TextField from '../TextInput';

/** Our Simple Form Test Utility */
const simpleForm = (props) => {
  const { setDoc } = props;
  const { doc } = props;
  const { test } = doc;

  return (
    <form >
      <label value={test} htmlFor="defaultFormName">{test}</label>
      <input id="defaultFormName" type="text" value={test} onChange={e => setDoc({ test: e.target.value })} />
      <TextField />
    </form>
  );
};

/** This is our base enhancer to handle doc changes */
const enhance = compose(
  pure,
  withStateHandlers(
    /** this our initial doc */
    { doc: { test: 'test' } },
    {
      /** this is the doc state handler */
      setDoc: () => value => ({
        doc: value,
      }),
    },
  ),
);

const SimpleForm = enhance(simpleForm);

SimpleForm.defaultProps = {
  /** This is our fields */
  children: null,
};

SimpleForm.propTypes = {
  /** doc defines the form state */
  doc: PropTypes.object,
};

export default SimpleForm;