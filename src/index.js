/* eslint-disable prefer-destructuring */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import localforage from 'localforage';
import App from './components/App';
import rootReducer from './reducers';

const usersBD = localforage.createInstance({ name: 'localforage', storeName: 'users' });

const store = createStore(rootReducer);
const user = 'guest';
let todo;

usersBD.getItem(user).then(todos => {
  // Создаём data URI или ещё как-нибудь помещаем фото в тег img.
  // todo = todos[0];
  console.log(todo);

  console.log(store.getState());
});

store.subscribe(() => {
  const currentState = store.getState();

  usersBD.setItem(user, currentState.todos);
  console.log('new state', store.getState());
});


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
