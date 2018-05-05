import { pathOr } from 'ramda';
import { compose, pure, setDisplayName, mapProps } from 'recompose';
import Field from './Field';

// const enhance = compose(withState('value', 'setvalue', ({ value }) => value));

// export { FieldComponent, enhance };

const enhance = compose(
  setDisplayName('Field'),
  pure,
  mapProps(({
    fieldName, doc, setDoc, ...props
  }) => ({
    label: fieldName,
    value: pathOr('', [fieldName], doc),
    onChange: e => setDoc({ [fieldName]: e.target.value }),
    ...props,
  })),
);

const EnhancedField = enhance(Field);

export default EnhancedField;
