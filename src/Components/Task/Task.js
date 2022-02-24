import React from "react";


function Task({id, description, isDone, onClick, edit }){
    return(
        <div>
        <h2>{id}</h2>
        <p>{description}</p>
        <p>{isDone}</p>
        <button> {edit}</button>
        <li>
        onClick={onClick}
    style={{
      textDecoration: isDone ? 'line-through' : 'none'
    }}
  
    {description}
    </li>
        </div>
    )
}

export default Task;