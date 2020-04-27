import { combineReducers } from "redux";
import crimeDataReducer from "./crimeDataReducer";

export default combineReducers({
    crimeData: crimeDataReducer
});
