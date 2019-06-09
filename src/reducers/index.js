import { combineReducers } from "redux";
import counterReducer from "./CounterReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({ counterReducer, userReducer });

export default rootReducer;
