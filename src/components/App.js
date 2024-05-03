import { React, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


/** 
 * This is the main component of the application.
 * It manages the tasks and their display based on the selected category.
 * @returns the rendered JSX for the application.
 */
function App() {
  //The state variable that holds the tasks to be displayed.
  const [tasksToDisplay, setTasksToDisplay] = useState(TASKS);
   
  
   // This function handles the category selection.
   // It is passed as a prop to the CategoryFilter component.
   //It filters the tasks based on the selected category and updates the tasksToDisplay state.
   
  function handleCategory(category) {
    console.log(category);
    setTasksToDisplay(TASKS.filter(task => {
      if (category === "All") return true;
      return task.category === category;
    }
    ));
  }
  /**
  * This function deals with the task deletion event.
  * It filters the tasks and removes the task with the matching text from the tasksToDisplay state.
  * @param {string} text - The text of the task to be deleted.
  */
  function handleDeleteEvent(text) {
    console.log("delete", text);

    setTasksToDisplay(tasksToDisplay.filter(task => !(task.text === text)));

  }

  
   // Handles the submission of a new task.
   //It adds the new task to the tasksToDisplay state.
  //It is passed as a prop to the NewTaskForm component.
  function onTaskFormSubmit (e){
    console.log(e)
    setTasksToDisplay([...tasksToDisplay, e]);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategory={handleCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit }  />
      <TaskList tasks={tasksToDisplay} handleDeleteEvent={handleDeleteEvent} />
    </div>
  );
}

export default App;