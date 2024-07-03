import React from 'react';
import InputForm from '../components/input/Index'
import TodoList from '../components/todoList/todoList/Index';

function Home() {
  return (
    <>
      <h1>My Todo List</h1>
      <InputForm />
      <TodoList />
    </>
  )
}

export default Home;