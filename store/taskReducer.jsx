import { ADD_TASK, DELETE_TASK, DID_TASK } from "./taskType";

const initialState = {
    tasks: [
        {"id": 1, "task": "Coding all day", "done": true},
        {"id": 2, "task": "Reading Business books", "done": true},
        {"id": 3, "task": "Taking a good nap", "done": true}
    ]
}

const taskReducer =(state=initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state, 
                tasks: [...state.tasks, {
                    task: action.payload,
                    done: false,
                    id: Math.random().toString()
                }] 
            }

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id != action.payload)
            }

        case DID_TASK:
            return {
                ...state,
                tasks: state.tasks.map((item) => {
                    if(item.id !== action.payload) {
                        return item
                    }
                    return {
                        ...item,
                        done: true
                    }
                })
            }
            
            
        
        default:
            return state

    }
}


export default taskReducer