import { FETCH_LAST_EVENTS } from "../actions/types";

const INITIAL_STATE = {
  lastEvents: [],
};

export const lastEventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LAST_EVENTS:
      return {
        ...state,
        lastEvents: action.payload,
      };
    default:
      return state;
  }
};
