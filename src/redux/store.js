import { legacy_createStore } from "redux";
import { root } from "./reducer";

export const store = legacy_createStore(root,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());