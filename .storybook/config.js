import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { setConsoleOptions } from '@storybook/addon-console';
const req = require.context('../src', true, /\.stories\.js$/)

addDecorator(centered);
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
