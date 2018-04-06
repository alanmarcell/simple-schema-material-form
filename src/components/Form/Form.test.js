import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Button } from 'material-ui';
import SimpleSchema from 'simpl-schema';
import Form from './Form';
import TextInput from '../TextInput';

describe('Form', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form ><TextInput fieldName="test" /></Form>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('TextInput', () => {
    const SessionSchema = new SimpleSchema({
      // required: {
      //   type: String,
      //   required: true,
      // },
      minRequired: {
        type: String,
        min: 6,
      },
      // optional: {
      //   type: String,
      // },
    });
    describe('Minimun required', () => {
      const onSubmit = jest.fn();
      const FormComponent = (
        <Form schema={SessionSchema} onSubmit={doc => onSubmit(doc)}>
          <TextInput fieldName="minRequired" />
        </Form>);
      const component = shallow(FormComponent);
      const newValue = 'typ.aaa.';
      let { children } = component.props();
      let Children = shallow(children[0][0]);
      Children.simulate('change', {
        target: { value: newValue },
      });

      let RequiredTextInput = component.find({ label: 'minRequired' });

      let button = component.find(Button);
      button.simulate('click');

      RequiredTextInput = component.find({ label: 'minRequired' });

      describe('With error', () => {
        it('should add error prop if required field dont reach min required', () => {
          expect(RequiredTextInput.props().error).toBe(true);
        });

        it.skip('submit should not be invoked if have errors', () => {
          expect(onSubmit).not.toHaveBeenCalled();
        });
      });

      describe('Without error', () => {
        ({ children } = component.props());
        Children = shallow(children[0][0]);

        let ValidTextInput = component.find({ label: 'minRequired' });
        Children.simulate('change', {
          target: { value: 'typing' },
        });

        component.update();
        button = component.find(Button);

        button.simulate('click');

        component.update();
        ValidTextInput = component.find({ label: 'minRequired' });

        it('should remove error prop if required field reach min required', () => {
          expect(ValidTextInput.props().error).toBe(false);
        });

        it('submit should be invoked if have no errors', () => {
          expect(onSubmit).toHaveBeenCalled();
        });
      });
    });


    it('shallow a TextInput', () => {
      const onSubmit = jest.fn();
      const FormComponent = (
        <Form onSubmit={doc => onSubmit(doc)}>
          <TextInput fieldName="test" />
        </Form>);

      const component = shallow(FormComponent);
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
      const FormComponent = (
        <Form onSubmit={doc => onSubmit(doc)}>
          <TextInput fieldName="test" />
          <TextInput fieldName="test2" />
        </Form>);

      const component = shallow(FormComponent);

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
});
