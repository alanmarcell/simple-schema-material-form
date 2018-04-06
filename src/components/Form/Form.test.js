import React from 'react';
import ReactDOM from 'react-dom';
import { path } from 'ramda';
import { shallow } from 'enzyme';
import { Button } from 'material-ui';
import SimpleSchema from 'simpl-schema';
import Form from './Form';
import TextInput from '../TextInput';


const newValue = 'Type Sample';
const invalidMinValue = 'Typ';
const validMinValue = 'Typing valid';
const invalidRequired = '';

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

    const getChildren = (component, index) => {
      const { children = [] } = component.props();
      return shallow(path(index, children));
    };

    const setup = ({ FormComponent }) => {
      const component = shallow(FormComponent);
      const { children } = component.props();
      const RequiredTextInput = component.find({ label: 'minRequired' });
      const Submit = () => component.find(Button);

      return {
        component,
        children,
        RequiredTextInput,
        Submit,
      };
    };
    describe('Minimun required', () => {
      const onSubmit = jest.fn();
      const FormComponent = (
        <Form schema={SessionSchema} onSubmit={doc => onSubmit(doc)}>
          <TextInput fieldName="minRequired" />
        </Form>);

      // eslint-disable-next-line
      let { component, Submit } = setup({ onSubmit, FormComponent });
      let textInput = getChildren(component, [0, 0]);

      textInput.simulate('change', {
        target: { value: invalidMinValue },
      });

      Submit().simulate('click');

      textInput = getChildren(component, [0, 0]);

      describe('With error', () => {
        it('should add error prop if required field dont reach min required', () => {
          expect(textInput.props().value).toBe(invalidMinValue);
          expect(textInput.props().error).toBe(true);
        });

        it.skip('submit should not be invoked if have errors', () => {
          expect(onSubmit).not.toHaveBeenCalled();
        });
      });

      describe('Without error', () => {
        let validTextInput = getChildren(component, [0, 0]);

        validTextInput.simulate('change', {
          target: { value: validMinValue },
        });

        component.update();
        Submit().simulate('click');

        component.update();
        validTextInput = getChildren(component, [0, 0]);
        it('should remove error prop if required field reach min required', () => {
          expect(validTextInput.props().value).toBe(validMinValue);
          expect(validTextInput.props().error).toBe(false);
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
      // eslint-disable-next-line
      let { Children, component, RequiredTextInput, Submit } = setup({ FormComponent });

      let textInput = getChildren(component, [0, 0]);
      textInput.simulate('change', {
        target: { value: newValue },
      });

      component.update();
      const newState = component.state();

      textInput = getChildren(component, [0, 0]);

      const { doc } = newState.childProps;
      const test2 = newState.childProps.doc.test;

      expect(test2).toBe(newValue);
      expect(textInput.props().value).toBe(newValue);
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

      // eslint-disable-next-line
      let { Children, component, RequiredTextInput, Submit } = setup({ FormComponent });

      let textInput1 = getChildren(component, [0, 0]);
      let textInput2 = getChildren(component, [0, 1]);

      textInput1.simulate('change', {
        target: { value: newValue },
      });
      textInput2.simulate('change', {
        target: { value: newValue },
      });
      const newState = component.state();
      const { doc } = newState.childProps;

      component.update();

      textInput1 = getChildren(component, [0, 0]);
      textInput2 = getChildren(component, [0, 1]);

      // Submit = component.find(Button);
      Submit().simulate('click');

      const test2 = newState.childProps.doc.test;

      const expectedDoc = {
        test: newValue,
        test2: newValue,
      };

      expect(doc).toEqual(expectedDoc);

      expect(test2).toBe(newValue);
      expect(textInput1.props().value).toBe(newValue);
      expect(textInput2.props().value).toBe(newValue);
      expect(component).toMatchSnapshot();
      expect(onSubmit).toHaveBeenCalled();
      expect(onSubmit).toBeCalledWith(doc);
    });
  });
});
