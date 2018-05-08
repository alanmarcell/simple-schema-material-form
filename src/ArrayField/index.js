import enhance from '../Field/fieldFactory';
import Field from './ArrayField';

// const enhance = compose(withState('value', 'setvalue', ({ value }) => value));

// export { FieldComponent, enhance };


const EnhancedField = enhance(Field);

export default EnhancedField;

