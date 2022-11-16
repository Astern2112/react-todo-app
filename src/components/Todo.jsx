import React from 'react';

import { BsTrash } from 'react-icons/bs';

const Todo = ({ text, setTodos, todos, todo }) => {
  const deleteTodoHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeTodoHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className=" mb-4 flex h-16 w-full items-center justify-between border-b-2  border-gray-300 px-2">
      <li
        className={` ${
          todo.completed ? ' line-through' : ''
        } text-lg font-semibold`}
      >
        {text}
      </li>
      <div className="flex gap-2">
        <button className="complete-button" onClick={completeTodoHandler}>
          <div
            className={`${
              todo.completed ? 'border-blue-700 bg-blue-700' : ''
            }  items-centerh-7 w-7 rounded-full border-2 border-gray-400 text-center text-white`}
          >
            ✓
          </div>
        </button>
        <button className="trash-button" onClick={deleteTodoHandler}>
          <BsTrash size={28} />
        </button>
      </div>
    </div>
  );
};

export default Todo;
