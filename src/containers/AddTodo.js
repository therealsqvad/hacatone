/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import store from '../index';

const AddTodo = ({ dispatch }) => {
  let inTitle = document.getElementById('title');
  let inDescription = document.getElementById('description');
  let inDeadline = document.getElementById('deadline');

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!inTitle.value.trim() && !inDeadline.value.trim() && !inDescription.value.trim()) {
          return;
        }
        const id = store.getState().todos.length;

        dispatch(addTodo(inTitle.value, inDescription.value, inDeadline.value, id));
        inTitle.value = '';
        inDescription.value = '';
        inDeadline.value = '';
      }}
      >

        <input id="title" ref={title => inTitle = title} />
        <input id="deadline" ref={node => inDeadline = node} />
        <input id="description" ref={node => inDescription = node} />
        <Button type="submit">
           Add Todo
        </Button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
