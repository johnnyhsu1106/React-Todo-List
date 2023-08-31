import { useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
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
    <Form onSubmit={handleFormSubmit} className='flex justify-content-end mb-5'>
      <Form.Group className="mb-3" controlId="TodoForm">
        <Form.Label hidden>To do</Form.Label>
        <Form.Control 
          ref={todoRef}
          type="text" 
          placeholder="Add todo" />
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