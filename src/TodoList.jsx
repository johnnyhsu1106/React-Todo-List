import Todo from './Todo';

const TodoList = ({
  todos, 
  onToggleTodo,
  onDeleteTodo,
  }) => {
    
  return (
    <>
      <h1 className='header'>Todo List</h1>
      <div>{todos.length === 0 ? 'Start to add todo ...' : null}</div>

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
    </>
  )
}

export default TodoList;