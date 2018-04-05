import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Form from './Form';
import TextInput from '../TextInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form name="World" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const component = shallow(<Form name="World" />);
  component.dive();
  expect(component).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form name="World" ><TextInput fieldName="hello" /></Form>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with a TextInput', () => {
  const component = shallow(<Form name="World" ><TextInput /></Form>);
  component.dive().dive();
  expect(component).toMatchSnapshot();
});

