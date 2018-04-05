import React from 'react';
import { merge } from 'ramda';
import MaterialCheckbox from 'material-ui/Checkbox';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import SelectionControl from '../SelectionControl';

const Control = ({
  setDoc, doc, fieldName, i,
}) => {
  return (<MaterialCheckbox
    onChange={(_event, val) => setDoc(merge(doc, { [fieldName]: { ...doc[fieldName], [i.key]: val } }))}
  />);
};

const Checkbox = props => {
  const {
    setDoc, label, selectOptions = [], fieldName, doc,
  } = props;

  return (
    <SelectionControl
      label={label}
    >
      <FormGroup row>
        {selectOptions.map(i =>
          (<FormControlLabel
            key={i.key}
            control={<Control {...{
              i, doc, fieldName, setDoc,
            }}
            />}
            label={i.label}
          />))
        }
      </FormGroup>
    </SelectionControl>
  );
};

export default Checkbox;
