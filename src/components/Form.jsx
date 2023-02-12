import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setFilterStatus,
}) => {
  const inputTextHandler = (text) => {
    setInputText(text);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }]);
    setInputText('');
  };

  const filterStatusHandler = (e) => {
    setFilterStatus(e);
  };
  return (
    <form className=" mb-6 flex h-16 w-full flex-col items-center  justify-between gap-4 rounded-sm px-2 md:flex-row">
      <div className=" flex h-full w-full justify-between gap-2 md:w-2/3">
        <input
          type="text"
          className="text-md block h-10 w-full min-w-fit flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          onChange={(e) => {
            inputTextHandler(e.target.value);
          }}
          value={inputText}
        />
        <button
          className="h-10   rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          type="submit"
          disabled={inputText.trim() === '' ? true : false}
          onClick={(e) => submitTodoHandler(e)}
        >
          Add
        </button>
      </div>
      <div className="self-start">
        <select
          id="todo-filter"
          name="todos"
          className="todo-filter  w-30 flex h-10 rounded-md  border border-gray-300 bg-gray-100 px-1  text-gray-900 "
          onChange={(e) => filterStatusHandler(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
