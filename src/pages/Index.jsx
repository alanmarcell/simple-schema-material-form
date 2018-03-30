import React from 'react';
import Button from 'material-ui/Button';

import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

function Index(_props) {
  return (
    <div>
      <Button color="primary" >
        OK
      </Button>
    </div>);
}


export default withRoot(withStyles(styles)(Index));
