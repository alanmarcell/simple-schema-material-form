import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../stories/withTests';
import TextInput from './';

storiesOf('TextInput', module)
  .addDecorator(withTests('TextInput'))
  .add('simple', () => <TextInput fieldName="World">Hello TextInput</TextInput>);

