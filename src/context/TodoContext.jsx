import { createContext, useContext, useState, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
const LOCAL_STORAGE_KEY = 'todos';
const TodoContext = createContext({});

const useTodoContext = () => {
  return useContext(TodoContext);
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

  const value = {
    query,
    filteredTodos,
    handleTodoAdd,
    handleTodoToggle,
    handleTodoDelete,
    handleCompletedTodosDelete,
    handleAllTodosDelete,
    hangleSearchQueryChange
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}

export { useTodoContext, TodoProvider };
