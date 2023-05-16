import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <>
      <h2 className='text-center text-white'>TODO LIST</h2>
      <TodoList />
    </>
  )
}

export default App;
