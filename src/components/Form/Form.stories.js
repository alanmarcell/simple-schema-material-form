import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from './Form';
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import withTests from '../../stories/withTests';

storiesOf('Form|TextInput', module)
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
  ));


storiesOf('Form|Checkbox', module)
  .addDecorator(withTests('Form'))
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

storiesOf('Form|Radio', module)
  .addDecorator(withTests('Form'))
  .add('with Radio', () => (
    <Form onSubmit={action('doc')} >
      <Radio selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]} fieldName="test" />
    </Form>
  ))
  .add('with Checkbox and Text Iput', () => (
    <Form onSubmit={action('doc')} >
      <Radio selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]} fieldName="test" />
      <TextInput fieldName="test2" />
    </Form>
  ));
