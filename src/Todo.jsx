const Todo = ({todo, onDeleteTodo, onToggleTodo}) => {
  const {id, title, isCompleted} = todo;

  return (
    <li key={id}>
      <label>
        <input 
          type='checkbox'
          onChange={() => {onToggleTodo(id)}}
          checked={isCompleted} />
        {title}
      </label>
      <button 
        className='btn btn-danger'
        onClick={() => (onDeleteTodo(id))}
      > Delete </button>
    </li>
  );
}

export default Todo;