import React from "react";
import './Filter.css';
 

const Filter = ({setshowDone,showDone}) =>{
    return (
        

        <>
 <button className="Filter" onClick={()=>setshowDone(!showDone)}> {showDone? "SHOW DONE TASKS" : "SHOW NOT DONE TASKS"} </button>

         </>

    )
}

export default Filter;