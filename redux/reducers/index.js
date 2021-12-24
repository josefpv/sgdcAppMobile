import { combineReducers } from "redux";
//reducers
import { cargaReducer } from "./cargaReducer";
import { lastEventReducer } from "./lastEventsReducer";

const rootReducers = combineReducers({
  cargas: cargaReducer,
  lastEvents: lastEventReducer,
});

export default rootReducers;
