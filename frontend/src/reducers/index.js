import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import showDetailsReducer from "./showDetails";
import filterReducer from "./filterReducer";
import loadingReducer from "./loading";

export default combineReducers({ dataReducer, showDetailsReducer, filterReducer, loadingReducer });