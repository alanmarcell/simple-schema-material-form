import React from 'react';
import { compose, pure, withState, withHandlers } from 'recompose';
import { head, keys, merge, findIndex, propEq, isEmpty, remove, append, update } from 'ramda';
import renderChild, { Fields } from './getChildProps';
import validateField from './validateForm';

const ReactForm = (props) => {
  const {
    doc, setDoc, errors, schema, setErrors, addError, onSubmit, style,
  } = props;

  console.log('ReactForm', props)

  return (
    <div style={style} >
      <Fields {...props} />
    </div>
  );
};

const enhance = compose(
  pure,
  withState('errors', 'setErrors', []),
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

export default enhance(ReactForm);
