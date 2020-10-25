import React from "react";
import { Box, Heading, Text, Stack } from "@chakra-ui/core";

import Ticket, { ITicket } from "./Ticket";
interface Props {
  tickets: ITicket[];
}

function TicketList(props: Props) {
  const { tickets } = props;
  return (
    <>
      {tickets.map((t) => (
        <Ticket key={t.ticket_id} ticket={t} />
      ))}
    </>
  );
}

export default TicketList;
