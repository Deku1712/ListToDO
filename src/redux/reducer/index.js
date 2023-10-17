import { combineReducers } from "redux";
import todos from "./todos";
import filterToDo from "./filterTodos";
export const root = combineReducers({todos, filterToDo})