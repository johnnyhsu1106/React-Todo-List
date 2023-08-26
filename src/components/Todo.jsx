import { useTodoContext } from '../context/TodoContext';


const Todo = ({filteredTodo}) => {
  const {
    handleTodoToggle,
    handleTodoDelete
  } = useTodoContext();

  const {id, title, isCompleted} = filteredTodo;

  return (
    <li key={id}>
      <label>
        <input 
          type='checkbox'
          onChange={() => {handleTodoToggle(id)}}
          checked={isCompleted} />
        {title}
      </label>
      <button 
        className='btn btn-danger'
        onClick={() => (handleTodoDelete(id))}
      > Delete </button>
    </li>
  );
}

export default Todo;