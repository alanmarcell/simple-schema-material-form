import React from 'react';
import PropTypes from 'prop-types';
import {
  head, keys, merge, findIndex, propEq, update, isEmpty, remove, append,
} from 'ramda';
import { compose, pure, withState, withHandlers } from 'recompact';
import { FormControl } from 'material-ui/Form';
import { Button } from 'material-ui';
import handleSubmit from './submitHandler';
import getChildProps, { formPropsFactory } from './getChildProps';
import { validateField } from './validateForm';

/** Our Simple Form Test Utility */
const SimpleForm = (props) => {
  const {
    doc, setDoc, errors, schema, setErrors, addError,
  } = props;
  const setChildProps = getChildProps(formPropsFactory({
    schema, setErrors, doc, setDoc, errors, addError,
  }));
  return (
    <FormControl >
      {React.Children.map(props.children, setChildProps)}
      <Button onClick={() => handleSubmit(props)} >Submit</Button>
    </FormControl>
  );
};

/** This is our base enhancer to handle doc changes */
const enhance = compose(
  pure,
  withState('errors', 'setErrors', []),
  /** this our initial doc */
  withState('doc', 'updateDoc', {}),
  withHandlers({
    addError: ({ errors, setErrors }) => (newErrors, fieldName) => {
      const err = findIndex(propEq('name', fieldName))(errors);

      if (isEmpty(newErrors)) {
        if (err >= 0) {
          return setErrors(remove(err, 1, errors));
        }
        return setErrors(errors);
      }
      if (err >= 0) {
        const updated = update(err, newErrors[0], errors);
        return setErrors(updated);
      }
      return setErrors(append(newErrors[0], errors));
    },
  }),
  /** this is the doc state handler */
  withHandlers({
    setDoc: ({
      doc, schema, addError, errors, updateDoc,
    }) => value => {
      const merged = merge(doc, value);
      const fieldName = head(keys(value));

      const fieldHasError = findIndex(propEq('name', fieldName))(errors);
      if (fieldHasError >= 0) {
        validateField({
          doc: merged, schema, addError, fieldName,
        });
      }
      return updateDoc(merged);
    },
  }),
);

const EnhancedSimpleForm = enhance(SimpleForm);

SimpleForm.defaultProps = {
  /** This is our fields */
  // children: null,
};

SimpleForm.propTypes = {
  /** doc defines the form state */
  doc: PropTypes.object.isRequired,

  /** handle the form state */
  setDoc: PropTypes.func.isRequired,

  children: PropTypes.node.isRequired,
};

export { SimpleForm };
export default EnhancedSimpleForm;
