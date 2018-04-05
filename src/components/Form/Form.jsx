import React from 'react';
import PropTypes from 'prop-types';
import { pathOr, merge } from 'ramda';
import { compose, withStateHandlers, pure } from 'recompact';
import { Button } from 'material-ui';

const getChildProps = ({ doc, setDoc }) => Child => {
  const { fieldName } = Child.props;
  const value = pathOr('', [fieldName], doc);

  const childProps = {
    ...Child.props,
    setDoc,
    doc,
    // onChange: e => setDoc({ [fieldName]: e.target.value }),
    value,
    label: fieldName,
  };

  return React.createElement(
    Child.type,
    childProps,
    null,
  );
};

/** Our Simple Form Test Utility */
const SimpleForm = (props) => {
  const { doc, setDoc, onSubmit } = props;
  const setChildProps = getChildProps({ doc, setDoc });
  return (
    <form >
      {React.Children.map(props.children, setChildProps)}
      <Button onClick={() => onSubmit(doc)} >Submit</Button>
    </form>
  );
};

/** This is our base enhancer to handle doc changes */
const enhance = compose(
  pure,
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
