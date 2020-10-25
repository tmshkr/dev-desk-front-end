import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { getTickets } from "../../actions";

import TicketList from "./TicketList";

interface Props extends RouteComponentProps<any> {}

function Dashboard(props: Props) {
  const { tickets } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets(props.history));
  }, []);

  return <TicketList tickets={tickets} />;
}

export default Dashboard;
