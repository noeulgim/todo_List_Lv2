import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../../redux/modules/todo';
import ListBox from '../listBox/Index';

const TodoList = () => {
  const todo = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();

  const ClickIsDoneHandler = (e, id) => {
    e.preventDefault();
    dispatch(toggleTodo(id));
  };

  const ClickDeleteHandler = (e, id) => {
    e.preventDefault();
    dispatch(deleteTodo(id));

  };

  return (
    <div>
      {/* Working */}
      <ListBox list={todo} ClickIsDoneHandler={ClickIsDoneHandler} ClickDeleteHandler={ClickDeleteHandler} isDoneStatus={false} title='Working' />
      {/* Done */}
      <ListBox list={todo} ClickIsDoneHandler={ClickIsDoneHandler} ClickDeleteHandler={ClickDeleteHandler} isDoneStatus={true} title='Done' />
    </div>
  );
};

export default TodoList;
