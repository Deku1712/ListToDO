import { ADD_TODO, TOOGLE_TODO } from "./actionTypes"

let idnext = 0;
export const addTodo = (content) =>(
    {
        type : ADD_TODO,
        payload: {
            id  : ++ idnext,
            content
        }
        
    } 
) 
export const toggleTodo = (id) => (
    {
        type : TOOGLE_TODO,
        payload : {
            id
        }
    }
)