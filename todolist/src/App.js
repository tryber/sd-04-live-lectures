import React from 'react';
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterTodos from './FilterTodos';

const App = () => (
  <div className="App">
    <AddTodo />
    <TodoList />
    <FilterTodos />
  </div>
)

export default App;
