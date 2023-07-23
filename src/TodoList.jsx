import React from 'react';
import Todo from './Todo';

const TodoList = ({
  todos, 
  onToggleTodo,
  onDeleteTodo,
  onDeleteCompletedTodos
  }) => {
  return (
    <>
      <ul className='list'>
        {todos.map((todo) => {
          const {id} = todo;
          return (
            <Todo
              key={id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onToggleTodo = {onToggleTodo}
            />
          )
        })}
      </ul>
      <button 
        type='text' 
        className='btn'
        onClick={onDeleteCompletedTodos}
      >
        Delete Completed Todos
      </button>
    </>
  )
}

export default TodoList;