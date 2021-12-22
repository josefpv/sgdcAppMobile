import { FETCH_MARQUESINAS, FETCH_CARGADORES } from "./../actions/types";

const INITIAL_STATE = {
  marquesinas: [],
  marquesinasCargadores: [],
};

export const cargaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MARQUESINAS:
      return {
        ...state,
        marquesinas: action.payload,
      };
    case FETCH_CARGADORES:
      return { ...state, marquesinasCargadores: action.payload };
    default:
      return state;
  }
};
