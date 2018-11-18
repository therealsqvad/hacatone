/* eslint-disable prefer-destructuring */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import localforage from 'localforage';
import Apps from './components/Apps';
import rootReducer from './reducers';
import { initTodo } from './actions';

// const usersBD = localforage.createInstance({ name: 'localforage', storeName: 'users' });

const store = createStore(rootReducer);
// const currentState = store.getState();
// const user = currentState.name;
const user = '123';
let todo;

localforage.getItem(user).then(todos => {
  console.log(todos);
  if (todos) {
  // Создаём data URI или ещё как-нибудь помещаем фото в тег img.
    todo = todos.planes;
    console.log(todo);

    console.log('getstate', store.getState());

    store.dispatch(initTodo(todo));
  }
});

store.subscribe(() => {
  const currentState = store.getState();
  const saveObj = { password: '123', isAdmin: false, planes: currentState.todos };

  localforage.setItem(user, saveObj);
  console.log('new state', store.getState());
});

// console.log(store.getState())

render(
  <Provider store={store}>
    <Apps />
  </Provider>,
  document.getElementById('root')
);

export default store;
