import React from 'react';
import ReactDOM from 'react-dom';
import SimpleForm from './SimpleForm';
import TextInput from './TextInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleForm ><TextInput fieldName="test" /></SimpleForm>, div);
  ReactDOM.unmountComponentAtNode(div);
});

