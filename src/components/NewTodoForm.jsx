import { useEffect, useRef } from 'react';
import { useTodoContext } from '../context/TodoContext';


const NewTodoForm = () => {
  const todoRef = useRef();
  const { handleTodoAdd } = useTodoContext();

  useEffect(() => {
    todoRef.current.focus();
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTodo = todoRef.current.value;
    
    if (newTodo.trim() === '') {
      return;
    }
    
    handleTodoAdd(newTodo);
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