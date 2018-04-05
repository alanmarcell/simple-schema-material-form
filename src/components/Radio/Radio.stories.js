import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import Radio from './';
import withTests from '../../stories/withTests';

const store = new Store({
  doc: {},
});

storiesOf('Fields|Radio', module)
  .addDecorator(withTests('Radio'))
  .add('simple', () => (
    <State store={store}>
      <Radio
        fieldName="test"
        setDoc={e => store.set({ doc: e })}
        selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]}
      />
    </State>
  ));
