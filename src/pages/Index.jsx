import React from 'react';
import SimpleSchema from 'simpl-schema';

import { withStyles } from 'material-ui/styles';
import Form from '../components/Form';
import TextInput from '../components/TextInput';

import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

const SessionSchema = new SimpleSchema({
  required: {
    type: String,
    min: 6,
  },
  optional: {
    type: String,
    required: false,
    min: 6,
  },
});

function Index(_props) {
  return (
    <div>
      <Form schema={SessionSchema} onSubmit={console.log} >
        <TextInput fieldName="required" />
        <TextInput fieldName="optional" />
      </Form>
    </div>);
}


export default withRoot(withStyles(styles)(Index));
