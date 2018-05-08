import React from 'react';
import { FormControl, FormLabel } from 'material-ui/Form';

const SelectionControl = props => {
  const { label, children } = props;
  return (
    <FormControl >
      <FormLabel>{label}</FormLabel>
      {children}
    </FormControl >
  );
};

export default SelectionControl;
