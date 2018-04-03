import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import SimpleForm from './SimpleForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleForm name="World" />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders with a TextInput', () => {
  const component = mount(<SimpleForm name="World" />);

  const newValue = 'Type Sample';
  let input = component.find('#defaultFormName');
  let state = component.state();

  const fieldValue = state.childProps.doc.test;

  expect(input.props().value).toBe('test');
  expect(fieldValue).toBe('test');

  input.simulate('change', {
    target: { value: newValue },
  });

  state = component.state();
  input = component.find('#defaultFormName');

  const newFieldValue = state.childProps.doc.test;

  expect(newFieldValue).toBe(newValue);
  expect(input.props().value).toBe(newValue);
});

it('shallow a TextInput', () => {
  const component = shallow(<SimpleForm name="World" />);
  
  const newValue = 'Type Sample';
  const initialInput = component.find('#defaultFormName');
  const initialLabel = component.find('label').find({ htmlFor: 'defaultFormName' });
  console.log(component.debug());

  const initialFormState = component.state();

  const { test } = initialFormState.childProps.doc;

  expect(initialLabel.text()).toBe('test');
  expect(test).toBe('test');

  initialInput.simulate('change', {
    target: { value: newValue },
  });

  const newState = component.state();
  const newInput = component.find('#defaultFormName');
  const test2 = newState.childProps.doc.test;

  expect(test2).toBe(newValue);
  expect(newInput.props().value).toBe(newValue);
  expect(component).toMatchSnapshot();
});

