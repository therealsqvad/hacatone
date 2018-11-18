/* eslint-disable prefer-destructuring */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import localforage from 'localforage';
import App from './components/App';
import rootReducer from './reducers';
import { initTodo } from './actions';

const usersBD = localforage.createInstance({ name: 'localforage', storeName: 'users' });

const store = createStore(rootReducer);
const user = 'guest';
let todo;

usersBD.getItem('guest').then(todos => {
  console.log(todos);
  // Создаём data URI или ещё как-нибудь помещаем фото в тег img.
  todo = todos.planes;
  console.log(todo);

  console.log(store.getState());

  store.dispatch(initTodo(todo));
});

store.subscribe(() => {
  const currentState = store.getState();
  const saveObj = { password: '123', isAdmin: false, planes: currentState.todos };

  usersBD.setItem(user, saveObj);
  console.log('new state', store.getState());
});


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
