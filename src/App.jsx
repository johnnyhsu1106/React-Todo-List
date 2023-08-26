import NewTodoForm from './components/NewTodoForm';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import ControlButtons from './components/ControlButtons';
import { TodoProvider } from './context/TodoContext';
import './App.css'


const App = () => {
  return (
    <TodoProvider>
      <NewTodoForm />
      <SearchBar />
      <TodoList />
      <ControlButtons />
    </TodoProvider>
  )
}

export default App;