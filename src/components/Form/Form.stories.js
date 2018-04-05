import React from 'react';
import { storiesOf } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import Form from './Form';
import TextInput from '../TextInput';
import results from '../../../.jest-test-results.json';

storiesOf('Form', module)
  .addDecorator(withTests({ results }, {
    filesExt: '.test.jsx',
  })('Form'))
  .add('with TextInput', () => <Form name="World" ><TextInput fieldName="Hello" /></Form>);

