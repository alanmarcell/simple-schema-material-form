import React from 'react';
import { merge } from 'ramda';
import MaterialCheckbox from 'material-ui/Checkbox';
import { FormControl, FormLabel, FormControlLabel, FormGroup } from 'material-ui/Form';

const Checkbox = props => {
  const {
    setDoc, label, selectOptions = [], fieldName, doc,
  } = props;

  return (
    <FormControl >
      <FormLabel>{label}</FormLabel>
      <FormGroup row>
        {selectOptions.map(i =>
          (<FormControlLabel
            key={i.key}
            control={<MaterialCheckbox
              checked={i.checked}
              onChange={(_event, val) => setDoc(merge(doc, { [fieldName]: { ...doc[fieldName], [i.key]: val } }))}
              value={i.key || ''}
              id={i.key}
            />}
            label={i.label}
          />))
        }
      </FormGroup>
    </FormControl >
  );
};

// const Checkbox = props => {
//   const inputProps = {
//     ...props,
//   };
//   return <CheckboxField selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]} {...inputProps} />;
// };

export default Checkbox;
