import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, updateTask, currentTask, setCurrentTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
      setDueDate(currentTask.dueDate);
    } else {
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      updateTask({ ...currentTask, title, description, dueDate });
    } else {
      addTask({ title, description, dueDate });
    }
    setTitle('');
    setDescription('');
    setDueDate('');
    setCurrentTask(null);
  };

  return (
    <section id="task-form-section">
      <h2>{currentTask ? 'Edit Task' : 'Add New Task'}</h2>
      <form id="task-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        <label htmlFor="due-date">Due Date:</label>
        <input type="date" id="due-date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        <button type="submit">Save Task</button>
      </form>
    </section>
  );
};

export default TaskForm;
