let nextTodoId = 0;

export const addTodo = (text, description, deadline) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
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

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
