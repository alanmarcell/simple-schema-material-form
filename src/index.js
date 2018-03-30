import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line
ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
