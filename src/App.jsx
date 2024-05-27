import { useState } from 'react';
import MyButton from './component/MyButton';
import TodoList from './component/TodoList';
import AddTask from './component/AddTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const initialTasks = [];

export default function App() {
  const [listOfTasks, setListOfTasks] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState(initialTasks);

  const filterList = (status) => {
    if (status === undefined) {
      setFilteredTasks(listOfTasks);
    } else {
      setFilteredTasks(listOfTasks.filter((task) => task.status === status));
    }
  };

  const addTask = (task) => {
    const newTask = {
      task,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: false,
    };
    setListOfTasks((prevTasks) => [newTask, ...prevTasks]);
    setFilteredTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const deleteTask = (index) => {
    const updatedTasks = listOfTasks.filter((_, i) => i !== index);
    setListOfTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = listOfTasks.map((task, i) => 
      i === index ? { ...task, status: !task.status } : task
    );
    setListOfTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-600 min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-5xl text-white font-bold mb-10 animate-bounce">My ToDo List</h1>
      <AddTask addTask={addTask} />
      <div className="my-6 flex justify-center space-x-4">
        <MyButton text="All" color="bg-blue-500" filter={() => filterList()} />
        <MyButton text="Completed" color="bg-green-500" filter={() => filterList(true)} />
        <MyButton text="Incomplete" color="bg-red-500" filter={() => filterList(false)} />
      </div>
      <TodoList data={filteredTasks} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} />
    </div>
  );
}
