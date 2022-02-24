 import { ADDTASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK} from '../constants/actionTypes';


 
export const addTask = (payload) =>{
   return{
        type: ADDTASK,
         payload 
    }
 }

 
 export const deleteTask = (payload) => {
  return {
      type: DELETE_TASK,
      payload
  }
}

export const completeTask = (id) => {
  return {
      type: COMPLETE_TASK,
      id
  }
}

export const editTask = (payload) => {
  return {
      type: EDIT_TASK,
      payload
  }
}



