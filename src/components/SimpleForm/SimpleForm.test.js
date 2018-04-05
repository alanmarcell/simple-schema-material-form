import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Button } from 'material-ui';
import SimpleForm from './SimpleForm';
import TextInput from './TextInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleForm ><TextInput fieldName="test" /></SimpleForm>, div);
  ReactDOM.unmountComponentAtNode(div);
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

    const { children } = component.props();

    const Children = shallow(children[0][0]);

    Children.simulate('change', {
      target: { value: newValue },
    });

    component.update();
    const newState = component.state();
    const newChildren = component.props().children[0][0];
    const NewChildren = shallow(newChildren);

    const { doc } = newState.childProps;
    const test2 = newState.childProps.doc.test;

    expect(test2).toBe(newValue);
    expect(NewChildren.props().value).toBe(newValue);
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
    const { children } = component.props();
    const TextInput1 = shallow(children[0][0]);
    const TextInput2 = shallow(children[0][1]);

    TextInput1.simulate('change', {
      target: { value: newValue },
    });
    TextInput2.simulate('change', {
      target: { value: newValue },
    });
    const newState = component.state();
    const { doc } = newState.childProps;

    component.update();

    const newChildren = component.props().children;
    const NewTextInput1 = shallow(newChildren[0][0]);
    const NewTextInput2 = shallow(newChildren[0][1]);

    const button = component.find(Button);
    button.simulate('click');

    const test2 = newState.childProps.doc.test;

    const expectedDoc = {
      test: newValue,
      test2: newValue,
    };

    expect(doc).toEqual(expectedDoc);

    expect(test2).toBe(newValue);
    expect(NewTextInput1.props().value).toBe(newValue);
    expect(NewTextInput2.props().value).toBe(newValue);
    expect(component).toMatchSnapshot();
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toBeCalledWith(doc);
  });
});
