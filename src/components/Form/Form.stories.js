import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from './Form';
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import withTests from '../../stories/withTests';

storiesOf('Form', module)
  .addDecorator(withTests('Form'))
  .add('with TextInput', () => (
    <Form onSubmit={action('doc')} >
      <TextInput fieldName="test" />
    </Form>
  ))
  .add('with 2 TextInput', () => (
    <Form onSubmit={action('doc')} >
      <TextInput fieldName="test" />
      <TextInput fieldName="test2" />
    </Form>
  ))
  .add('with Checkbox', () => (
    <Form onSubmit={action('doc')} >
      <Checkbox selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]} fieldName="test" />
    </Form>
  ))
  .add('with Checkbox and Text Iput', () => (
    <Form onSubmit={action('doc')} >
      <Checkbox selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]} fieldName="test" />
      <TextInput fieldName="test2" />
    </Form>
  ));

