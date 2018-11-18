// let nextTodoId = (new Date()).getTime();

export const addTodo = (text, description, deadline, id = 0) => ({
  type: 'ADD_TODO',
  id: id + 1,
  text,
  description,
  deadline
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const initTodo = todos => ({
  type: 'INIT',
  todos
});

export const actLogin = name => ({
  type: 'LOGIN',
  name
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
