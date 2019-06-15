import { combineReducers } from "redux";
import counterReducer from "./CounterReducer";
import userReducer from "./UserReducer";
import "bootstrap/dist/css/bootstrap.min.css";

const rootReducer = combineReducers({ counterReducer, userReducer });

export default rootReducer;
