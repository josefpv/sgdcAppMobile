import { combineReducers } from "redux";
//reducers
import { cargaReducer } from "./cargaReducer";

const rootReducers = combineReducers({
  cargas: cargaReducer,
});

export default rootReducers;
