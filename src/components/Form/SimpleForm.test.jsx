import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SimpleForm from './SimpleForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleForm name="World" />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('shallow a TextInput', () => {
  const component = shallow(<SimpleForm name="World" />);

  const newValue = 'Type Sample';
  const initialInput = component.find('TextField');
  const initialFormState = component.state();
  const { test } = initialFormState.childProps.doc;

  expect(test).toBe('test');

  initialInput.simulate('change', {
    target: { value: newValue },
  });
  const newState = component.state();
  const newInput = component.find('TextField');
  const test2 = newState.childProps.doc.test;

  expect(test2).toBe(newValue);
  expect(newInput.props().value).toBe(newValue);
  expect(component).toMatchSnapshot();
});

