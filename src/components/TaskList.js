import React from "react";
import Task from "./Task";
/* This function renders a list of tasks from Task.js
* It takes the array of tasks and the function handleDeleteEvent as parameters
* The handleDeleteEvent function is a callback function that is passed as a prop to the TaskList component
*/
function TaskList({tasks, handleDeleteEvent}) {
  
  let taskList = tasks.map(task=> {
    const {category, text} = task;
    return(
      //The deleteTask prop is passed to the Task component, which then calls the handleDeleteEvent function when the delete action is performed.
      <Task key={text} category={category} text={text} deleteTask={handleDeleteEvent}/>
    )})
 
    
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;