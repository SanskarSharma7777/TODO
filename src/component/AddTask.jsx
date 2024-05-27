import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-6">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow p-2 mr-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faPlusCircle} className="text-lg" />
      </button>
    </form>
  );
};

export default AddTask;
