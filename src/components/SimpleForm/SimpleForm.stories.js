import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SimpleForm from './SimpleForm';
import TextInput from '../TextInput';
import Checkbox from './Checkbox';
import withTests from '../../stories/withTests';

storiesOf('SimpleForm', module)
  .addDecorator(withTests('SimpleForm'))
  .add('with TextInput', () => (
    <SimpleForm onSubmit={action('doc')} >
      <TextInput fieldName="test" />
    </SimpleForm>
  ))
  .add('with 2 TextInput', () => (
    <SimpleForm onSubmit={action('doc')} >
      <TextInput fieldName="test" />
      <TextInput fieldName="test2" />
    </SimpleForm>
  ))
  .add('with Checkbox', () => (
    <SimpleForm onSubmit={action('doc')} >
      <Checkbox selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]} fieldName="test" />
    </SimpleForm>
  ))
  .add('with Checkbox and Text Iput', () => (
    <SimpleForm onSubmit={action('doc')} >
      <Checkbox selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]} fieldName="test" />
      <TextInput fieldName="test2" />
    </SimpleForm>
  ));

