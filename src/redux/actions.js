import { ADD_TODO, SET_FILTER, TOOGLE_TODO } from "./actionTypes"

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

export const setFitler = (filter) => (
    {
        type : SET_FILTER,
        payload: {
            filter
        }
    }
)