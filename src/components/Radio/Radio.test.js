import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Radio from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Radio fieldName="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow a Radio', () => {
  const setDoc = jest.fn();
  const RadioComponent = (<Radio
    fieldName="test"
    setDoc={setDoc}
    doc={{}}
    selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]}
  />);

  const component = shallow(RadioComponent);
  const RadioGroup = component.find('RadioGroup');

  RadioGroup.simulate('change', {
    target: { value: 'um' },
  });

  // Inspect doc prop field key
  expect(setDoc).toBeCalledWith({ test: 'um' });
  expect(setDoc).toHaveBeenLastCalledWith({ test: 'um' });
  expect(setDoc).toHaveBeenCalled();
  expect(component).toMatchSnapshot();
});

