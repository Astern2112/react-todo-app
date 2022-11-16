import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const LOCAL_STORAGE_KEY = 'todos';

  //Get Todos from Local Storage when first renders
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // Save todos to local storage and filters todoList by status
  useEffect(() => {
    const filterHandler = () => {
      switch (filterStatus) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
      }
    };
    if (todos.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }
    filterHandler();
  }, [filterStatus, todos]);

  return (
    <div className="App flex h-screen max-h-screen w-screen flex-col items-center overflow-hidden  bg-blue-200  py-6 px-40">
      <header className="mb-4">
        <h1 className="text-5xl font-bold">Todo App</h1>
      </header>

      <div className="min-h-5/6 flex h-5/6 w-full flex-col items-center  rounded-md bg-white p-6 ">
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setFilterStatus={setFilterStatus}
        />
        <TodoList todos={filteredTodos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
