import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from '../components/TextInput';

storiesOf('TextInput', module)
  .add('simple', () => <TextInput fieldName="World">Hello TextInput</TextInput>);

