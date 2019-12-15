import {combineReducers} from "redux";
import data from "./data/data";
import user from "./user/user";


const reducer = combineReducers({data, user});

export default reducer;
