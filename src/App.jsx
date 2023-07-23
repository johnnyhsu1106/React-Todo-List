import { useState, useEffect } from 'react'
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './App.css'

const LOCAL_STORAGE_KEY = 'ITEM';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const todos = localStorage.getItem(LOCAL_STORAGE_KEY);
    
    if (todos === null) {
      return [];
    }
    return JSON.parse(todos);
  });

  // Storage all todos to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleTodoAdd = (title) => {
    setTodos((prevTodos) => {
      return [...prevTodos, {id: crypto.randomUUID(), title, isCompleted: false}];
    });
  };

  const handleTodoToggle = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === id ? {...todo, isCompleted: !todo.isCompleted } : todo;
      });
    });
  };

  const handleTodoDelete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => { 
        return todo.id !== id;
      });
    });
  };

  const handleCompletedTodosDelete = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return !todo.isCompleted;
      }); 
    })
  };

  return (
    <>
      <NewTodoForm onAddTodo={handleTodoAdd} />

      <h1 className='header'>Todo List</h1>
      
      {todos.length === 0 ? 'Add something to your to do list ...' : null}

      <TodoList
        todos={todos} 
        onToggleTodo={handleTodoToggle} 
        onDeleteTodo={handleTodoDelete}
        onDeleteCompletedTodos={handleCompletedTodosDelete} 
      />
    </>
  )
}

export default App;