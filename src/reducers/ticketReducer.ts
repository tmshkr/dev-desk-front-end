import { ActionTypes } from "../actions";

const initialState: any = [];

export const ticketReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_TICKETS:
      return action.payload;
    default:
      return state;
  }
};
