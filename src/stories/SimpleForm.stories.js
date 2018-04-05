import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SimpleForm from '../components/SimpleForm/SimpleForm';
import TextInput from '../components/SimpleForm/TextInput';
import Checkbox from '../components/SimpleForm/Checkbox';

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

storiesOf('SimpleForm', module)
  .add('with Checkbox', () => (
    <SimpleForm onSubmit={action('doc')} >
      <Checkbox selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]} fieldName="test" />
    </SimpleForm>
  ));

storiesOf('SimpleForm', module)
  .add('with Checkbox and Text Iput', () => (
    <SimpleForm onSubmit={action('doc')} >
      <Checkbox selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]} fieldName="test" />
      <TextInput fieldName="test2" />
    </SimpleForm>
  ));

