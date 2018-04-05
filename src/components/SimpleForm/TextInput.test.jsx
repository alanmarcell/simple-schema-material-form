import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
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
