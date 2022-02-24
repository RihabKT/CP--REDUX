import { ADDTASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK} from "../constants/actionTypes";


const initialState={
    todos: [
        
        {
         id: Math.random(),
         description: "DRINK TOO MUCH WATER",
         isDone: false
        },
      
        {
          id: Math.random(),
          description: "SPEND TIME IN SUNLIGHT",
          isDone: false
        },
        
        {
          id: Math.random(),
          description: "READ SOMETHING",
          isDone: false
        },
      
       { id: Math.random(),
        description: "TAKE TIME FOR RELAXATION AND MEDITATION",
        isDone: false
      },
      
      
      { id: Math.random(),
        description: "TAKE A VITAMIN C SUPPLEMENT",
        isDone: false
      },
        
      ],    
}

const reducerTask = (state = initialState, action) =>{
    switch (action.type){
        case ADDTASK:
            return {...state, todos:[...state.todos, action.payload]};
          
        case DELETE_TASK:
            return { ...state, todos: state.todos.filter(el => el.id !== action.payload) }
                
        case COMPLETE_TASK:
            return { ...state, todos: state.todos.map(el => el.id === action.id ? { ...el, isDone: !el.isDone } : el) }

        case EDIT_TASK:
            return { ...state, todos: state.todos.map(el => el.id === action.payload.id ? { ...el, description: action.payload.description } : el) }

       
            default: return state;
        }
      
    }

    export default reducerTask;
   