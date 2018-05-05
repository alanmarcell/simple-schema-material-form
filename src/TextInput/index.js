import { pathOr } from 'ramda';
import { compose, pure, setDisplayName, mapProps } from 'recompose';
import TextInput from './TextInput';

// const enhance = compose(withState('value', 'setvalue', ({ value }) => value));

// export { TextInputComponent, enhance };

const enhance = compose(
  pure,
  setDisplayName('TextInput'),
  mapProps(({
    fieldName, doc, setDoc, ...props
  }) => ({
    label: fieldName,
    value: pathOr('', [fieldName], doc),
    onChange: e => setDoc({ [fieldName]: e.target.value }),
    ...props,
  })),
);

const EnhancedTextInput = enhance(TextInput);

export default EnhancedTextInput;
