import React, { useState, useRef } from 'react';

const NewTodoForm = ({onAddTodo}) => {
  // const [newTodo, setNewTodo] = useState('');
  const todoRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTodo = todoRef.current.value;
    
    if (newTodo.trim() === '') {
      return;
    }
    
    onAddTodo(newTodo);
    todoRef.current.value = null;
    // setNewTodo('');
  };

  return (
    <form 
      className='new-todo-form' 
      onSubmit={handleFormSubmit}
    >
      <div className='form-row'>
        <label htmlFor='todo'>New Todo</label>
        <input 
          type='text' 
          id='todo' 
          ref={todoRef}
          // value={newTodo}
          // onChange={(e) => {setNewTodo(e.target.value)}}
        />
      </div>
      <button type='submit' className='btn'>Add</button>
    </form>
  )
}

export default NewTodoForm;