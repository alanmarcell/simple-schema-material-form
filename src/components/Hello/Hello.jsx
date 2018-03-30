import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

/** Our Simple Hello */
const Hello = ({ message }) => {
  return (
    <div>
      <Button variant="raised" color="primary" >
        {message}
      </Button>
    </div>);
};

Hello.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Hello;
