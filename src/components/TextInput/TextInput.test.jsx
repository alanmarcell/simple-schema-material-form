import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import TextInput from './TextInput';
import Form from '../Form';

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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form name="World" ><TextInput fieldName="hello" /></Form>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with a TextInput', () => {
  const component = mount(<TextInput fieldName="hello" />);
  const newValue = 'Type Sample';
  const input = component.find('input');
  const output = component.find('p');

  input.simulate('change', {
    persist() {
      this.target = { value: newValue };
    },
  });

  const label = component.find('label');
  expect(output.text()).toBe(newValue);

  const { value } = component.state();
  expect(value).toEqual(newValue);
  expect(label.text()).toBe(newValue);

  input.simulate('change', { target: { value: 'empty' } });
  expect(output.text()).toBe('empty');
  expect(label.text()).toBe('empty');
});

