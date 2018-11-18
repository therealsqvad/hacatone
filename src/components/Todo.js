/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
  onClick, completed, text, deadline, description
}) => (
  <li
    onClick={onClick}

  >
    <b style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    >
      {' '}
      {text}
    </b>
    {' '}
    <br />
    {deadline}
    <br />
    {description}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
