import React from 'react';
import './TaskToDo.css';
import EditTask from "../EditTask/EditTask";
import {useDispatch} from "react-redux";
import {deleteTask, completeTask} from "../../JS/actions/actionTask";
import Task from '../Task/Task';



function TaskToDo(props){

  
    const dispatch = useDispatch()
    
    return(
    <>
     
<div className='TaskCard' style={{border:"3px solid rgb(19, 187, 131)", borderRadius:"8px", cursor:"pointer", margin:"10px"}}>
<h2 className='IdTask' style={{fontWeight:"bolder", color:"rgb(48, 173, 167)", fontSize:"17px"}} > {props.Task.id} </h2>
<p className='DescriptionTask' style={{color:"rgb(73, 7, 73)", fontWeight:"bolder", fontSize:"15px", textDecoration: props.Task.isDone ? "line-through" : "none"}}> {props.Task.description} </p>

<p> {props.Task.isDone} </p>

</div>
<EditTask Todo={props.Task}/>
  <button className='DeleteButton' style={{borderRadius:"5px", padding:"5px", margin:"5px", marginLeft:"50px", width:"70px", color:"rgb(136, 32, 136)", border:"2px solid rgb(136, 32, 136) ", backgroundColor:" rgb(187, 241, 241)", fontWeight:"bolder", fontSize:"smaller"}} onClick={() => dispatch(deleteTask(props.Task.id))} > DELETE </button>
<button className='DoneButton' style={{borderRadius:"5px", padding:"5px", margin:"5px" ,marginRight:"300px" , width:"70px", color:"rgb(55, 179, 179)", border:"2px solid rgb(55, 179, 179) ", backgroundColor:" rgb(240, 172, 240) ", fontWeight:"bolder", fontSize:"smaller"}}  onClick={() => dispatch(completeTask(props.Task.id))} >  {props.Task.isDone ? " NOT DONE" : "DONE"} </button>
</>
)
}


export default TaskToDo;