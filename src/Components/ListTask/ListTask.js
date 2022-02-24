import React from "react";
import TaskToDo from "../TaskToDo/TaskToDo";
import "./ListTask.css";
import {useSelector} from "react-redux";


function ListTask ({showDone}){


   

    const Tasks =  useSelector(state=>state.todos)

    return(
       
        (<div className="GridTask">
            {Tasks.filter(el => el.isDone === showDone).map((el,i) => <TaskToDo Task={el} key={i} /> )} 
            
        </div>)

        
      

        
    )
}

export default ListTask;

