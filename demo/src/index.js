import React from 'react';
import { render } from 'react-dom';
import SimpleSchema from 'simpl-schema';
import Input, { InputLabel } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { compose, pure } from 'recompose';
import MaterialButton from 'material-ui/Button';

import ReactForm, { Field, Submit } from '../../src';

const SessionSchema = new SimpleSchema({
  required: {
    type: String,
    min: 6,
  },
  optional: {
    type: String,
    required: false,
  },
});

const textInput = ({
  value,
  classes,
  onChange,
  label,
  helperText = {},
  error = false,
  ...props
}) => {
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="name-simple" error={error} >{label}</InputLabel>
      <Input {...{ value, onChange, error }} {...props} />
      {error &&
        <FormHelperText error={error} id="name-helper-text">
          {helperText.message}
        </FormHelperText>
      }
    </FormControl>
  );
};

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
});

const enhance = compose(
  pure,
  withStyles(styles),
);

const TextInput = enhance(textInput);

const Demo = () => {
  const formProps = {
    schema: SessionSchema,
    onSubmit: a => console.log('>>> ON SUBMIT', a),
    onSubmitSuccess: a => console.log('>>> ON onSubmitSuccess', a),
    style: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };

  return (
    <div>
      <div>
        <h1>simple-schema-react-form Material-UI Demo </h1>
        <ReactForm {...formProps} >
          <Field fieldName="required" Component={TextInput} />
          <Field fieldName="optional" type="password" Component={TextInput} />
          <div>
            <Submit Component={MaterialButton} />
          </div>
        </ReactForm>
      </div>
      <div>
        <h1>simple-schema-react-form Demo </h1>
        <ReactForm {...formProps} >
          <Field type="text" fieldName="required" />
          <Field type="password" fieldName="optional" />

          <Submit />
        </ReactForm>
      </div>
    </div>
  );
};

render(<Demo />, document.querySelector('#demo'));
