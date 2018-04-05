import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';
import { merge } from 'ramda';

import { SimpleForm } from './Form';
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import withTests from '../../stories/withTests';

const setDoc = store => doc => store.set({ doc: merge(store.state.doc, doc) });

const Form = ({ store, children }) => (
  <SimpleForm
    {...store.state}
    setDoc={setDoc(store)}
    onSubmit={action('doc')}
  >
    {children}
  </SimpleForm>
);

storiesOf('Form|TextInput', module)
  .addDecorator(withTests('Form'))
  .add('with TextInput', withState({ doc: {} }, (store) => (
    <Form store={store}>
      <TextInput fieldName="test" />
    </Form>
  )))
  .add('with 2 TextInput', withState({ doc: {} }, (store) => (
    <Form store={store}>
      <TextInput fieldName="test" />
      <TextInput fieldName="test2" />
    </Form>
  )));


storiesOf('Form|Checkbox', module)
  .addDecorator(withTests('Form'))
  .add('with Checkbox', withState({ doc: {} }, (store) => (
    <Form store={store}>
      <Checkbox selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]} fieldName="test" />
    </Form>
  )))
  .add('with Checkbox and Text Iput', withState({ doc: {} }, (store) => (
    <Form store={store}>
      <Checkbox selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]} fieldName="test" />
      <TextInput fieldName="test2" />
    </Form>
  )));

storiesOf('Form|Radio', module)
  .addDecorator(withTests('Form'))
  .add('with Radio', withState({ doc: {} }, (store) => (
    <Form store={store}>
      <Radio selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]} fieldName="test" />
    </Form>
  )))
  .add('with Checkbox and Text Iput', withState({ doc: {} }, (store) => (
    <Form store={store}>
      <Radio selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]} fieldName="test" />
      <TextInput fieldName="test2" />
    </Form>
  )));
