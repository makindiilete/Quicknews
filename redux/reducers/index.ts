import { combineReducers } from "redux";
import { loginReducer, logoutReducer } from "./loginReducer";
import { fetchNewsReducer } from "./fetchNewsReducer";
import { registerReducer } from "./registerReducer";

export default combineReducers({
  fetchNewsReducer,
  registerReducer,
  loginReducer,
});
