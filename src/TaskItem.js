import React from 'react';

const TaskItem = ({ task, deleteTask, editTask }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.dueDate}</p>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
