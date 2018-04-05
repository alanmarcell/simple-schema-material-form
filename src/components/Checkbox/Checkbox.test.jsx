import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Checkbox fieldName="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow a Checkbox', () => {
  const setDoc = jest.fn();
  const CheckboxComponent = (<Checkbox
    fieldName="test"
    setDoc={setDoc}
    doc={{}}
    selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]}
  />);

  const component = shallow(CheckboxComponent);
  const { control } = component.find({ label: 1 }).props();
  const Control = shallow(control);

  Control.simulate('change', null, true);
  Control.simulate('change', null, false);

  // Inspect doc prop field key
  expect(setDoc).toBeCalledWith({ test: { um: true } });
  expect(setDoc).toHaveBeenLastCalledWith({ test: { um: false } });
  expect(setDoc).toHaveBeenCalled();
  expect(component).toMatchSnapshot();
});

