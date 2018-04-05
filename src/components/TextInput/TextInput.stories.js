import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import withTests from '../../stories/withTests';
import TextInput from './';

storiesOf('Fields|TextInput', module)
  .addDecorator(withTests('TextInput'))
  .add('simple', withState({ doc: {} }, (store) => (
    <TextInput
      {...store.state}
      setDoc={e => store.set({ doc: e })}
      fieldName="World"
    />
  )));

