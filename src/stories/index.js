import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Form from '../components/Form';
import TextInput from '../components/TextInput';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Form', module)
  .add('with text', () => <Form onClick={action('clicked')}>Hello Form</Form>)
  .add('with some emoji', () => (
    <Form onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Form>
  ));

storiesOf('TextInput', module)
  .add('with text', () => <TextInput onClick={action('clicked')}>Hello TextInput</TextInput>)
  .add('with some emoji', () => (
    <TextInput onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </TextInput>
  ));

