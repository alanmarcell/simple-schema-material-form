import React from 'react';
import PropTypes from 'prop-types';
import { merge } from 'ramda';
import { compose, withStateHandlers, pure, withState } from 'recompact';
import { FormControl } from 'material-ui/Form';
import { Button } from 'material-ui';
import handleSubmit from './submitHandler';
import getChildProps from './getChildProps';

/** Our Simple Form Test Utility */
const SimpleForm = (props) => {
  const { doc, setDoc, errors } = props;
  const setChildProps = getChildProps({ doc, setDoc, errors });
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
  withStateHandlers(
    /** this our initial doc */
    { doc: {} },
    {
      /** this is the doc state handler */
      setDoc: ({ doc }) => value => {
        const merged = merge(doc, value);
        return {
          doc: merged,
        };
      },
    },
  ),
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
