import axios from "axios";

export enum ActionTypes {
  GET_TICKETS = "GET_TICKETS",
  SET_TICKETS = "SET_TICKETS",
}

export const getTickets = () => (dispatch: any) => {
  dispatch({ type: ActionTypes.GET_TICKETS });

  axios
    .get("/api/tickets")
    .then((res) => {
      dispatch({ type: ActionTypes.SET_TICKETS, payload: res.data });
    })
    .catch((err) => {
      console.dir(err);
      // props.history.push("/login");
    });
};
