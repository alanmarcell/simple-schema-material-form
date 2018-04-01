import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from '../components/Form';
import TextInput from '../components/TextInput';

storiesOf('Form', module)
  .add('with TextInput', () => <Form name="World" ><TextInput fieldName="Hello" /></Form>);

