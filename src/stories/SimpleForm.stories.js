import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextField } from 'material-ui';
import { action } from '@storybook/addon-actions';
import SimpleForm from '../components/Form/SimpleForm';

storiesOf('SimpleForm', module)
  .add('with TextInput', () => (
    <SimpleForm onSubmit={action('doc')} >
      <TextField fieldName="test" />
    </SimpleForm>
  ));

storiesOf('SimpleForm', module)
  .add('with 2 TextInput', () => (
    <SimpleForm onSubmit={action('doc')} >
      <TextField fieldName="test" />
      <TextField fieldName="test2" />
    </SimpleForm>
  ));
