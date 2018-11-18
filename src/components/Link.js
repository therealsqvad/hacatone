import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


const Link = ({ active, children, onClick }) => (
  // eslint-disable-next-line react/button-has-type
  <Button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </Button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
