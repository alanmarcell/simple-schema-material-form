import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Button } from 'material-ui';
import SimpleForm from './SimpleForm';
import TextInput from './TextInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextInput fieldName="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow a TextInput', () => {
  const setDoc = jest.fn();
  const TextInputComponent = (
    <TextInput setDoc={setDoc} fieldName="test" />
  );
  const component = shallow(TextInputComponent);
  const newValue = 'Type Sample';

  component.simulate('change', {
    target: { value: newValue },
  });

  expect(setDoc).toHaveBeenCalled();
  expect(setDoc).toBeCalledWith({ test: newValue });
  expect(component).toMatchSnapshot();
});

describe('Test within Form', () => {
  it('shallow a TextInput', () => {
    const onSubmit = jest.fn();
    const SimpleFormComponent = (
      <SimpleForm onSubmit={doc => onSubmit(doc)}>
        <TextInput fieldName="test" />
      </SimpleForm>);

    const component = shallow(SimpleFormComponent);

    const newValue = 'Type Sample';
    const initialInput = component.find({ label: 'test' });
    // const initialFormState = component.state();
    // const { test } = initialFormState.childProps.doc;

    // expect(test).toBe('');

    initialInput.simulate('change', {
      target: { value: newValue },
    });

    const newState = component.state();
    const { doc } = newState.childProps;

    const newInput = component.find({ label: 'test' });
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
        <TextInput fieldName="test" />
        <TextInput fieldName="test2" />
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

    const expectedDoc = {
      test: newValue,
      test2: newValue,
    };

    expect(doc).toEqual(expectedDoc);

    expect(test2).toBe(newValue);
    expect(newInput.props().value).toBe(newValue);
    expect(newInput2.props().value).toBe(newValue);
    expect(component).toMatchSnapshot();
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toBeCalledWith(doc);
  });
});