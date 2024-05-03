import React from "react";

/* This component represents a single task with its text, category, and a delete button.
* It returns a JSX element representing the task.
* The deleteTask function is passed as a prop to the Task component and is called with the task's text as an argument.*/
function Task({category, text, deleteTask}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>deleteTask(text)}>X</button> 
    </div>
  );
}

export default Task;
