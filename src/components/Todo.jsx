import { Form, Button, FormCheck  } from 'react-bootstrap';
import { useTodoContext } from '../context/TodoContext';
import PropTypes from 'prop-types';


const Todo = ({filteredTodo}) => {
  const {
    handleTodoToggle,
    handleTodoDelete
  } = useTodoContext();

  const { id, title, isCompleted } = filteredTodo;

  return (
    <div className='d-flex align-items-center justify-content-between mb-2'>
      <Form.Check
        className='me-5 fs-6'
        id={id}
      >
        <FormCheck.Input 
          type="checkbox" 
          onChange={() => {handleTodoToggle(id)}} 
        />
        <FormCheck.Label className={isCompleted ? 'text-decoration-line-through' : ''}>
          {title}
        </FormCheck.Label>

      </Form.Check>
      <Button
        size='sm' 
        variant="outline-danger"
        onClick={() => (handleTodoDelete(id))}
      >
        Delete
      </Button>
    </div>
  );
};


Todo.propTypes = {
  filteredTodo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
  }),
  
}

export default Todo;