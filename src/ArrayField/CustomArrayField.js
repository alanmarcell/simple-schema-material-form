import { compose, pure, mapProps } from 'recompose';
import WithSelectFactory from './WithSelectFactory';
import CustomField from '../Field/CustomField';

const enhanceArray = compose(  
  mapProps(props => {
    debugger;
    return WithSelectFactory(props);
  }),
);

export default enhanceArray(CustomField);

