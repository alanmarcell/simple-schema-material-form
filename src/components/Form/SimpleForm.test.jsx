import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { TextField, Button } from 'material-ui';
import SimpleForm from './SimpleForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleForm ><TextField fieldName="test" /></SimpleForm>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('shallow a TextInput', () => {
  const onSubmit = jest.fn();
  const SimpleFormComponent = (
    <SimpleForm onSubmit={doc => onSubmit(doc)}>
      <TextField fieldName="test" />
    </SimpleForm>);

  const component = shallow(SimpleFormComponent);

  const newValue = 'Type Sample';
  const initialInput = component.find('TextField');
  // const initialFormState = component.state();
  // const { test } = initialFormState.childProps.doc;

  // expect(test).toBe('');

  initialInput.simulate('change', {
    target: { value: newValue },
  });

  const newState = component.state();
  const { doc } = newState.childProps;

  const newInput = component.find('TextField');
  const test2 = newState.childProps.doc.test;

  expect(test2).toBe(newValue);
  expect(newInput.props().value).toBe(newValue);
  expect(component).toMatchSnapshot();


  const button = component.find(Button);
  button.simulate('click');

  expect(onSubmit).toHaveBeenCalled();
  expect(onSubmit).toBeCalledWith(doc);
});


it('shallow a 2 TextInput', () => {
  const onSubmit = jest.fn();
  const SimpleFormComponent = (
    <SimpleForm onSubmit={doc => onSubmit(doc)}>
      <TextField fieldName="test" />
      <TextField fieldName="test2" />
    </SimpleForm>);

  const component = shallow(SimpleFormComponent);

  const newValue = 'Type Sample';
  const initialInput = component.find({ label: 'test' });
  const initialInput2 = component.find({ label: 'test2' });
  // const initialFormState = component.state();
  // const { test } = initialFormState.childProps.doc;

  // expect(test).toBe('');

  initialInput.simulate('change', {
    target: { value: newValue },
  });
  initialInput2.simulate('change', {
    target: { value: newValue },
  });
  const newState = component.state();
  const { doc } = newState.childProps;

  const newInput = component.find({ label: 'test' });
  const newInput2 = component.find({ label: 'test2' });

  const button = component.find(Button);
  button.simulate('click');

  const test2 = newState.childProps.doc.test;

  expect(test2).toBe(newValue);
  expect(newInput.props().value).toBe(newValue);
  expect(newInput2.props().value).toBe(newValue);
  expect(component).toMatchSnapshot();
  expect(onSubmit).toHaveBeenCalled();
  expect(onSubmit).toBeCalledWith(doc);
});

