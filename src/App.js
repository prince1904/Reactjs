import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    setTasks(data);
  };

  const addTask = async (task) => {
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const newTask = await response.json();
    setTasks([...tasks, newTask]);
  };

  const updateTask = async (task) => {
    const response = await fetch(`http://localhost:5000/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const updatedTask = await response.json();
    setTasks(tasks.map(t => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    });
    setTasks(tasks.filter(t => t.id !== id));
  };

  const editTask = (task) => {
    setCurrentTask(task);
  };

  return (
    <div className="App">
      <header>
        <h1>Task Management Application</h1>
      </header>
      <main>
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
        <TaskForm addTask={addTask} updateTask={updateTask} currentTask={currentTask} setCurrentTask={setCurrentTask} />
      </main>
    </div>
  );
};

export default App;
