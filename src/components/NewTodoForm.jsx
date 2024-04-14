import { useEffect, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTodoContext } from '../context/TodoContext';


const NewTodoForm = () => {
  const todoRef = useRef(null)
  const [todo, setTodo] = useState('');
  const { handleTodoAdd } = useTodoContext();

  useEffect(() => {
    todoRef.current?.focus();
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (todo.trim() === '') {
      return;
    }
    
    handleTodoAdd(todo);
    setTodo('');
  };


  return (
    <Form onSubmit={handleFormSubmit} className='flex justify-content-end mb-5'>
      <Form.Group className="mb-3" controlId="TodoForm">
        <Form.Label hidden>To do</Form.Label>
        <Form.Control
          value={todo} 
          ref={todoRef}
          type="text" 
          placeholder="Add to do here"
          onChange={(e) => { setTodo(e.target.value) }} 
        />
      </Form.Group>

      <Button 
        className='w-100'
        variant="secondary" 
        type="submit"
      >
        Submit
      </Button>
    </Form>
  )
}

export default NewTodoForm;