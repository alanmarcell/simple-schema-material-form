import enhance from './fieldFactory';
import Field from './Field';

// const enhance = compose(withState('value', 'setvalue', ({ value }) => value));

// export { FieldComponent, enhance };


const EnhancedField = enhance(Field);

export default EnhancedField;