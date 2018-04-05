import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import Radio from './';
import withTests from '../../stories/withTests';

storiesOf('Fields|Radio', module)
  .addDecorator(withTests('Radio'))
  .add('simple', withState({ doc: {} }, (store) => (
    <Radio
      {...store.state}
      fieldName="test"
      setDoc={e => store.set({ doc: e })}
      selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]}
    />
  )));
