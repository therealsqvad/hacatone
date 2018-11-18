import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Apps from './Apps';

const App = () => (
  <div>
    <Apps />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
