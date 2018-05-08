import { branch, renderComponent } from 'recompose';
import { isNil } from 'ramda';
import CustomField from './CustomField';
import DefaultField from './DefaultField';

const renderSubmitButton = isDefaultButton =>
  branch(
    isDefaultButton,
    renderComponent(DefaultField),
  );

const enhance = renderSubmitButton(props =>
  isNil(props.Component));

export default enhance(CustomField);
