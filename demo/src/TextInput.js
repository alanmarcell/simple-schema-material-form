import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { compose, pure } from 'recompose';


const textInput = ({
  value,
  classes,
  onChange,
  label,
  fieldName,
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

export default TextInput;
