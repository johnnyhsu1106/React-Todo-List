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
    <Form onSubmit={handleFormSubmit} className='d-flex  justify-content-center mb-5 w-100'>
      <Form.Group className="w-100" controlId="TodoForm">
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
        className='w-50 mx-3'
        variant="secondary" 
        type="submit"
      >
        Submit
      </Button>
    </Form>
  )
}

export default NewTodoForm;