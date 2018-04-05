import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import centered from '@storybook/addon-centered';
import { setConsoleOptions } from '@storybook/addon-console';
const req = require.context('../src', true, /\.stories\.js$/)

setOptions({
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
});

addDecorator(centered);
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
