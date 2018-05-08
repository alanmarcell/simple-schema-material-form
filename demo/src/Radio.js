import React from 'react';
import MaterialRadio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';
import SelectionControl from './SelectionControl';



const Radio = props => {


  const {
    onChange, label, selectOptions = [], value,
  } = props;

  debugger;


  return (
    <SelectionControl
      label={label}
    >
      <RadioGroup
        row
        aria-label={label}
        name={label}
        value={value}
        onChange={onChange}
      >
        {selectOptions.map(i =>
          (<FormControlLabel
            key={i.key}
            control={<MaterialRadio />}
            label={i.label}
            value={i.key}
          />))
        }
      </RadioGroup>
    </SelectionControl>
  );
};


export default Radio;
