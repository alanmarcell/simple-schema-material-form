import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './';
import withTests from '../../stories/withTests';

storiesOf('Fields/Checkbox', module)
  .addDecorator(withTests('Checkbox'))
  .add('simple', () => (
    <Checkbox selectOptions={[{ label: 1, key: 'um' }, { label: 2, key: 'dois' }]} fieldName="test" />
  ));
