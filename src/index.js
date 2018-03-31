import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form/Form';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line
ReactDOM.render(<Form name="Hello" />, document.getElementById('root'));
registerServiceWorker();
