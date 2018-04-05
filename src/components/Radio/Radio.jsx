import React from 'react';
import PropTypes from 'prop-types';
import { pathOr } from 'ramda';
import MaterialRadio, { RadioGroup } from 'material-ui/Radio';
import { compose, setDisplayName, pure, mapProps } from 'recompact';
import { FormControlLabel } from 'material-ui/Form';
import SelectionControl from '../SelectionControl';

const RadioSelectionControl = props => {
  const {
    onChange, label, selectOptions = [], value,
  } = props;

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

const Radio = props => <RadioSelectionControl {...props} />;

/** This is our base enhancer to handle doc changes */
const enhance = compose(
  pure,
  setDisplayName('Radio'),
  mapProps(({
    fieldName, doc, setDoc, ...props
  }) => ({
    label: fieldName,
    value: pathOr('', [fieldName], doc),
    onChange: e => setDoc({ [fieldName]: e.target.value }),
    ...props,
  })),
);

const EnhancedRadio = enhance(RadioSelectionControl);

Radio.defaultProps = {
  value: '',
};

Radio.propTypes = {
  value: PropTypes.string,
  doc: PropTypes.object.isRequired,
  setDoc: PropTypes.func.isRequired,
};


export default EnhancedRadio;
