import React, { useRef } from 'react';

const NewTodoForm = ({onAddTodo}) => {
  const todoRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTodo = todoRef.current.value;
    
    if (newTodo.trim() === '') {
      return;
    }
    
    onAddTodo(newTodo);
    todoRef.current.value = null;
  };

  return (
    <form 
      className='new-todo-form' 
      onSubmit={handleFormSubmit}
    >
      <div className='form-row'>
        <input 
          type='text' 
          placeholder='Add new todo'
          ref={todoRef}
        />
      </div>
      <button type='submit' className='btn'>Add</button>
    </form>
  )
}

export default NewTodoForm;