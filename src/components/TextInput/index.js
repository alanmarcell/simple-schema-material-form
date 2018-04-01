import { compose, withState } from 'recompose';

import TextInput from './TextInput';

const enhance = compose(withState('value', 'setvalue', ({ value }) => value));

export { TextInput, enhance };

export default enhance(TextInput);
