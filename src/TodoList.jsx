import Todo from './Todo';

const TodoList = ({
  todos, 
  onToggleTodo,
  onDeleteTodo,
  onDeleteCompletedTodos,
  onDeleteAllTodos
  }) => {
    
  return (
    <>

      <ul className='list'>
        {todos.map((todo) => {
          const {id} = todo;
          return (
            <Todo
              key={id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onToggleTodo = {onToggleTodo}
            />
          )
        })}
      </ul>
      <button 
        type='text' 
        className='btn btn-warning'
        onClick={onDeleteCompletedTodos}
      >
        Delete Completed
      </button>
      <button 
        type='reset' 
        className='btn btn-danger reset'
        onClick={onDeleteAllTodos}
      >
        Reset
      </button>
    </>
  )
}

export default TodoList;