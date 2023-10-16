import { ADD_TODO, TOOGLE_TODO } from "../actionTypes";

const initalState = {
    allId : [],
    byIds: {

    }
}

export default function todos( state = initalState, action){
    switch(action.type){
        case ADD_TODO:{

            const {id, content} = action.payload;
            return {
                ...state,
                allId : [ ...state.allId, id],
                byIds : {
                    ...state.byIds,
                    [id] : {
                        content,
                        completed: false
                    }
                }
            }
        }
        case TOOGLE_TODO : {
            const id = action.payload.id;
            return {
                ...state,
                byIds : {
                    ...state.byIds,
                    [id] :{
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            }
        }
        default : return state
    }
}