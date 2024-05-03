import React, { useState } from "react";
/** 
 * CategoryFilter component is used to filter categories.
 *  It takes two props: categories and handleCategory.
 * The component keeps track of which category is currently selected (initially, none is selected). 
 * It displays a list of buttons, one for each category. When you click a button, the component does two things:
 * 1. It remembers which category you just clicked (updates the selected category).
 * 2. It calls the handleCategory function and tells it which category you clicked.
 * @param {Array} categories - An array of category names.
 * @param {Function} handleCategory - A function that is called when you select a category.
 * @returns {JSX.Element} - A JSX element representing the CategoryFilter component.
 */


function CategoryFilter({categories, handleCategory}) {
  const [isSelected, setIsSelected] = useState("All");

  
  /**
   * handleButtonClick function is called when a category button is clicked.
   * It updates the selected category and calls the handleCategory function with the selected category.
   *
   * @param {String} category - The category name.
   */
  function handleClickButton(category){
    
    setIsSelected(category)
   
    handleCategory(category); 
  }

   /**
   * categoryList is an array of JSX elements, each representing a category button.
   * It is created by mapping over the categories array and creating a button for each category.
   * The button's onClick event is set to call handleButtonClick with the category's name.
   * The button's className is set based on whether it represents the selected category.
   *
   * @type {Array} - An array of JSX elements representing category buttons.
   */
  let categoryList = categories.map(category=>{
    return (
      <button key={category} onClick={()=>{handleClickButton(category)}} className={isSelected===category? "selected":"" }>{category}</button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryList}
    </div>
  );
}

export default CategoryFilter;