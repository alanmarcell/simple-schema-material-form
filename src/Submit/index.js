
import { compose, pure, setDisplayName } from 'recompose';
import SubmitButton from './Submit';

const enhance = compose(
  setDisplayName('SubmitButton'),
  pure,
);

export default enhance(SubmitButton);
