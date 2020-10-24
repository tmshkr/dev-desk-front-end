import React from "react";
import { Box, Heading, Text, Stack, Tag } from "@chakra-ui/core";

export interface ITicketProps {
  ticket: ITicket;
  key: number;
}

function Ticket(props: ITicketProps) {
  const { ticket_id, title, description, categories } = props.ticket;
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="md">{title}</Heading>
      <Text mt={2}>{description}</Text>
      {categories?.map((cat, i) => (
        <Tag key={i}>{cat}</Tag>
      ))}
    </Box>
  );
}

export default Ticket;

export interface ITicket {
  ticket_id: number;
  posted_by_id: number;
  posted_by_name: string;
  posted_at: string;
  status: string;
  title: string;
  description: string;
  what_ive_tried: string;
  categories: string[];
  claimed_by_id: number;
  claimed_by_name: string;
}
