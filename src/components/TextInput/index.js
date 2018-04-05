import { compose, withState } from 'recompose';

import TextInputComponent from './TextInput';

const enhance = compose(withState('value', 'setvalue', ({ value }) => value));

export { TextInputComponent, enhance };

export default TextInputComponent;
