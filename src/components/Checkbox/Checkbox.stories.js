import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import Checkbox from './';
import withTests from '../../stories/withTests';

storiesOf('Fields|Checkbox', module)
  .addDecorator(withTests('Checkbox'))
  .add('simple', withState({ doc: {} }, (store) => (
    <Checkbox
      {...store.state}
      fieldName="test"
      setDoc={e => store.set({ doc: e })}
      selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]}
    />
  )));
