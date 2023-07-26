import { useState, useEffect, useMemo } from 'react'

import NewTodoForm from './NewTodoForm';
import SearchBar from './SearchBar';
import TodoList from './TodoList';
import ControlButtons from './ControlButtons';

import './App.css'

const LOCAL_STORAGE_KEY = 'ITEM';

const App = () => {
  const [query, setQuery] = useState('');
  const [todos, setTodos] = useState(() => {
    const todos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (todos === null) {
      return [];
    }
    return JSON.parse(todos);
  });

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      return todo.title.toLowerCase().includes(query.toLocaleLowerCase());
    });
  }, [todos, query]);

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

  const handleAllTodosDelete = () => {
    setTodos([]);
    setQuery('');
  };

  const hangleSearchQueryChange = (query) => {
    setQuery(query);
  };

  return (
    <>
      <NewTodoForm onAddTodo={handleTodoAdd} />

      <SearchBar
        query={query}
        onChangeSearchQuery={hangleSearchQueryChange} 
      />

      <TodoList
        todos={filteredTodos} 
        onToggleTodo={handleTodoToggle} 
        onDeleteTodo={handleTodoDelete}
      />

      <ControlButtons
        onDeleteCompletedTos={handleCompletedTodosDelete}
        onDeltedAllTodos={handleAllTodosDelete} 
      />
    </>
  )
}

export default App;