import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <section id="task-list-section">
      <h2>Task List</h2>
      <ul id="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
