import React, { useState } from 'react';

const Feedback = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([
    { text: 'This is awesome', isNew: true },
    { text: 'Thank you', isNew: true }
  ]);

  const handleFeedbackChange = (e) => {
    setNewTask(e.target.value);
  };

  const AddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, isNew: true }]);
      setNewTask('');
    }
  };

  const DeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className='feed-class'>
        <h1 className='feed'>Feedbacks</h1>
        <div>
          <textarea
            className='textclass'
            value={newTask}
            onChange={handleFeedbackChange}
            placeholder='Enter your feedbacks here...'
          ></textarea>
          <button className="bt-add" onClick={AddTask}>Enter</button>
        </div>
        <div className='feedback-list'>
          {tasks.map((task, index) => (
            <div key={index} className={task.isNew ? 'card' : ''}>
              <span className="text">{task.text}</span>
              <button className="delete-btn" onClick={() => DeleteTask(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feedback;
