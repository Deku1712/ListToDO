import { SET_FILTER } from "../actionTypes";
import {  Filter } from "../filterType";

const intialFilter = Filter.ALL;

export default function filterToDo(state = intialFilter , action) {
    switch(action.type){
        case SET_FILTER: {

            return (
                state = action.payload.filter
            )
        }
        default : return state;
    }
}