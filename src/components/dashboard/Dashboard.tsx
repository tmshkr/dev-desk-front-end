import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";

import TicketList from "./TicketList";

interface Props extends RouteComponentProps<any> {}

function Dashboard(props: Props) {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    axios
      .get("/api/tickets")
      .then((res) => {
        console.log(res.data);
        setTickets(res.data);
      })
      .catch((err) => {
        props.history.push("/login");
      });
  }, []);
  return <TicketList tickets={tickets} />;
}

export default Dashboard;
