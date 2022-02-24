 import React, {useState} from "react";
 import './EditTask.css';
 import { Button, Modal } from "react-bootstrap";
import Task from "../Task/Task";
 import { useDispatch } from "react-redux";
import { editTask } from "../../JS/actions/actionTask";



 const EditTask=({Todo})=>{

   const [editTodo, setEditTodo] = useState (Todo.description);
    const handleChange = (e) => setEditTodo(e.target.value);
  

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
  
     const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    

 return(

 <div>
 <button className='EditButton' style={{borderRadius:"5px",padding:"5px", margin:"5px",height:"80px" ,width:"70px", color:"rgb(32, 99, 77)", border:"2px solid rgb(32, 99, 77)", backgroundColor:" rgb(223, 189, 223) ", fontWeight:"bolder", fontSize:"smaller"}} onClick={handleShow}> EDIT </button>


  
       <Modal show={show} onHide={handleClose}>
          <Modal.Header style={{backgroundColor:"rgb(233, 197, 233)"}}  closeButton>
           <Modal.Title style={{color:"rgb(21, 165, 117)", fontWeight:"bolder", fontFamily:"cursive"}}>SHALL WE EDIT THE TASK!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{color:"purple", fontWeight:"bolder", fontFamily:"cursive", backgroundColor:" rgb(211, 236, 227)"}}>EDIT THE TASK:
             <input className="EditInput" type="text" value={editTodo} onChange={handleChange} />
          </Modal.Body >
         <Modal.Footer style={{backgroundColor:"rgb(211, 236, 227)"}}>
           <Button className="close" onClick={handleClose}>
             Close
           </Button>
           <Button className="confirm"  onClick={() => { handleClose();
             dispatch (editTask ( { id: Todo.id, description: editTodo } ) ) } } >
             Confirm Your Edit
           </Button>
          </Modal.Footer>
       </Modal>
     

       </div>
    );
 }
  
  

 export default EditTask;


