import React from "react";
import { Box, Heading, Text, Stack, Tag } from "@chakra-ui/core";

import Ticket, { ITicket } from "./Ticket";
interface Props {
  tickets: ITicket[];
}

function TicketList(props: Props) {
  const { tickets } = props;
  return (
    <Stack spacing={8}>
      {tickets.map((t) => (
        <Ticket key={t.ticket_id} ticket={t} />
      ))}
    </Stack>
  );
}

export default TicketList;
