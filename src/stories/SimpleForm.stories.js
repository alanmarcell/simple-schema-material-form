import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SimpleForm, { TextInput } from '../components/Form/SimpleForm';

storiesOf('SimpleForm', module)
  .add('with TextInput', () => (
    <SimpleForm onSubmit={action('doc')} >
      <TextInput fieldName="test" />
    </SimpleForm>
  ));

storiesOf('SimpleForm', module)
  .add('with 2 TextInput', () => (
    <SimpleForm onSubmit={action('doc')} >
      <TextInput fieldName="test" />
      <TextInput fieldName="test2" />
    </SimpleForm>
  ));
