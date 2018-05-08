
import { compose, pure, mapProps, branch, renderComponent } from 'recompose';
import { isNil } from 'ramda';
import WithSelectFactory from './WithSelectFactory';


import CustomField from '../Field/CustomField';
import DefaultField from '../Field/DefaultField';

const renderSubmitButton = isDefaultButton =>
  branch(
    isDefaultButton,
    renderComponent(DefaultField),
  );

const enhance = renderSubmitButton(props =>
  isNil(props.Component));


const enhanceArray = compose(
  pure,
  mapProps(props => {
    return WithSelectFactory(props);
  }),
);

export default enhance(enhanceArray(CustomField));



