import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextInput fieldName="World" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const component = shallow(<TextInput fieldName="World" />);
  component.dive();
  expect(component).toMatchSnapshot();
});
