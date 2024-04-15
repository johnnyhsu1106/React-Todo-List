import { createContext, useContext, useState, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
const LOCAL_STORAGE_KEY = 'todos';
const TodoContext = createContext(null);

const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === null) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
}

const TodoProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [todos, setTodos] = useLocalStorage(LOCAL_STORAGE_KEY, []);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      return todo.title.toLowerCase().includes(query.toLowerCase()); 
    });
  }, [todos, query]);

  const handleTodoAdd = (title) => {
    setTodos((currTodos) => {
      return [...currTodos, {id: uuidv4(), title, isCompleted: false}];
    });
  };

  const handleTodoToggle = (id) => {
    setTodos((currTodos) => {
      return currTodos.map((todo) => {
        return todo.id === id ? {...todo, isCompleted: !todo.isCompleted } : todo;
      });
    });
  };

  const handleTodoDelete = (id) => {
    setTodos((currTodos) => {
      return currTodos.filter((todo) => { 
        return todo.id !== id;
      });
    });
  };

  const handleCompletedTodosDelete = () => {
    setTodos((currTodos) => {
      return currTodos.filter((todo) => {
        return !todo.isCompleted;
      }); 
    })
  };

  const handleAllTodosDelete = () => {
    setTodos([]);
    setQuery('');
  };

  const handleSearchQueryChange = (query) => {
    setQuery(query);
  };

  const handleSearchQueryClear = () => {
    setQuery('');
  };

  const value = {
    query,
    filteredTodos,
    handleTodoAdd,  
    handleTodoToggle,
    handleTodoDelete,
    handleCompletedTodosDelete,
    handleAllTodosDelete,
    handleSearchQueryChange,
    handleSearchQueryClear
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired
};


export { useTodoContext, TodoProvider };
