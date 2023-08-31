import { Form, Button, ListGroup } from 'react-bootstrap';
import { useTodoContext } from '../context/TodoContext';


const Todo = ({filteredTodo}) => {
  const {
    handleTodoToggle,
    handleTodoDelete
  } = useTodoContext();

  const {id, title, isCompleted} = filteredTodo;

  return (
    <div className='d-flex align-items-center justify-content-between mb-2'>
      <Form.Check
        className='me-5 fs-6'
        type="checkbox"
        id={id}
        label={title}
        onChange={() => {handleTodoToggle(id)}}
      />
      <Button
        size='sm' 
        variant="outline-danger"
        onClick={() => (handleTodoDelete(id))}
      >
        delete
      </Button>

    </div>
    // <li key={id}>
    //   <label>
    //     <input 
    //       type='checkbox'
    //       onChange={() => {handleTodoToggle(id)}}
    //       checked={isCompleted} />
    //     {title}
    //   </label>
    //   <button 
    //     className='btn btn-danger'
    //     onClick={() => (handleTodoDelete(id))}
    //   > Delete </button>
    // </li>
  );
}

export default Todo;