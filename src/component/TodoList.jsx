import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({ data, deleteTask, toggleTaskStatus }) => {
  return (
    <ul className="w-full max-w-lg">
      {data.map((task, index) => (
        <li
          key={index}
          className={`p-4 my-2 rounded-lg shadow-md flex justify-between items-center transition duration-300 ease-in-out transform hover:scale-105 ${
            task.status ? 'bg-green-300' : 'bg-red-300'
          }`}
        >
          <span className="flex-grow">{task.task}</span>
          <span className="text-sm text-gray-700">{task.time}</span>
          <div className="flex space-x-2 ml-4">
            <button
              onClick={() => toggleTaskStatus(index)}
              className="text-green-700 hover:text-green-900"
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-700 hover:text-red-900"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
