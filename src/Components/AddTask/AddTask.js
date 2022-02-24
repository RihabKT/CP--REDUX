
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/actions/actionTask";
import "./AddTask.css";



const AddTask = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const handleChange = e => setNewTodo(e.target.value);

  const handleClick = (e) => {
    e.preventDefault();
    if (newTodo){
    dispatch(addTask({
      id: Math.random(),
      description: newTodo,
      isDone: false
    }))
    setNewTodo('')}
    else {
      alert('PLEASE ENTER A TASK !')
    }
  }

  return (
    < form onSubmit={handleClick}>
   
      <input className="AddDescription" placeholder="WRITE A NEW TASK" value={newTodo} onChange={handleChange} type="text" />
      <button className="AddButton" onClick={handleClick}> ADD TASK</button>
      
    </form>
  )
}




export default AddTask;