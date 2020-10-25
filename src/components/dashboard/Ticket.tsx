import React from "react";
import { Box, Heading, Text, Tag } from "@chakra-ui/core";

export interface ITicketProps {
  ticket: ITicket;
}

function Ticket(props: ITicketProps) {
  const { title, description, categories } = props.ticket;
  return (
    <Box
      p={5}
      shadow="md"
      display="flex"
      justifyContent="space-between"
      borderWidth="1px"
      margin="1rem 0"
      backgroundColor="gray.200"
    >
      <Box>
        <Heading fontSize="md">{title}</Heading>
        <Text mt={2}>{description}</Text>
      </Box>
      <Box>
        {categories?.map((cat, i) => (
          <Tag key={i} backgroundColor="blue.200" margin={1} float="right">
            {cat}
          </Tag>
        ))}
      </Box>
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
