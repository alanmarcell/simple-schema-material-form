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
  expect(component).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form name="World" ><TextInput fieldName="hello" /></Form>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('Shallow with a TextInput', () => {
  const component = shallow(<TextInput fieldName="hello" />);
  const newValue = 'Type Sample';
  let input = component.find('TextField');
  input.simulate('change', {
    target: { value: newValue },
  });


  let output = component.find('p');
  input = component.find('TextField');

  expect(output.text()).toBe(newValue);
  expect(input.props().value).toBe(newValue);

  input.simulate('change', { target: { value: 'empty' } });

  output = component.find('p');
  input = component.find('TextField');
  expect(output.text()).toBe('empty');
  expect(input.props().value).toBe('empty');
});

it('Mount with a TextInput', () => {
  const component = mount(<TextInput fieldName="hello" />);
  const newValue = 'Type Sample';
  const input = component.find('input');
  const output = component.find('p');
  input.simulate('change', {
    target: { value: newValue },
  });


  const label = component.find('label');

  expect(output.text()).toBe(newValue);
  expect(label.text()).toBe(newValue);

  input.simulate('change', { target: { value: 'empty' } });
  expect(output.text()).toBe('empty');
  expect(label.text()).toBe('empty');
});

