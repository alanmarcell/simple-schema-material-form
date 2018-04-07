import React from 'react';
import ReactDOM from 'react-dom';
import { path } from 'ramda';
import { shallow } from 'enzyme';
import { Button } from 'material-ui';
import SimpleSchema from 'simpl-schema';
import Form from './Form';
import TextInput from '../TextInput';

const invalidMinValue = 'Typ';
const validMinValue = 'Typing valid';
// const invalidRequired = '';

it('should renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form ><TextInput fieldName="test" /></Form>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Text Input Validation', () => {
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
    describe('With error', () => {
      it('should add error prop if required field dont reach min required', () => {
        textInput = getChildren(component, [0, 0]);
        expect(textInput.props().value).toBe(invalidMinValue);
        expect(textInput.props().error).toBe(true);
      });

      it('submit should not be invoked if have errors', () => {
        expect(onSubmit).not.toHaveBeenCalled();
      });
    });


    // describe('should remove error prop if required field reach min required', () => {
    describe('Without error', () => {
      it('should remove error prop if required field reach min required', () => {
        let validTextInput = getChildren(component, [0, 0]);

        validTextInput.simulate('change', {
          target: { value: validMinValue },
        });

        component.update();
        Submit().simulate('click');

        component.update();
        validTextInput = getChildren(component, [0, 0]);
        console.log('validTextInput.props()', component.state().childProps);
        expect(validTextInput.props().value).toBe(validMinValue);
        expect(validTextInput.props().error).toBe(false);
      });

      it('submit should be invoked if have no errors', () => {
        expect(onSubmit).toHaveBeenCalled();
      });
    });
  });
});
// });
// });
