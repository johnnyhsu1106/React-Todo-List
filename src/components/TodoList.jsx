import { useTodoContext } from '../context/TodoContext';
import Todo from './Todo';


const TodoList = () => {
  const { filteredTodos } = useTodoContext();

  return (
    <>
      <h1 className='header'>Todo List</h1>
      <div>{filteredTodos.length === 0 ? 'Start to add todo ...' : null}</div>

      <ul className='list'>
        {filteredTodos.map((filteredTodo) => {
          const {id} = filteredTodo;
          return (
            <Todo
              key={id}
              filteredTodo={filteredTodo}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList;