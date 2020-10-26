import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Box, Heading, Text, Tag, Spinner } from "@chakra-ui/core";
import moment from "moment";
import axios from "axios";

export interface ITicketProps {
  ticket?: ITicket;
}

function Ticket(props: ITicketProps) {
  const [ticket, setTicket] = useState<ITicket | any>();
  const { id } = useParams<any>();
  const history = useHistory();
  const isDetailView = !!id;

  useEffect(() => {
    if (id) {
      axios.get(`/api/tickets/${id}`).then((res) => setTicket(res.data));
    }
  }, []);

  if (!(props.ticket || ticket)) {
    return (
      <Box textAlign="center" mt="25vh">
        <Spinner color="blue.500" display="block" m="3rem auto" />
        <Text>Fetching ticket...</Text>
      </Box>
    );
  }

  const {
    title,
    description,
    categories,
    posted_by_name,
    posted_at,
    ticket_id,
  } = props.ticket || ticket;

  return (
    <Box
      p={5}
      shadow="md"
      display="flex"
      justifyContent="space-between"
      borderWidth="1px"
      margin="1rem 0"
      backgroundColor="gray.200"
      onClick={
        isDetailView ? undefined : () => history.push(`/ticket/${ticket_id}`)
      }
      cursor={isDetailView ? undefined : "pointer"}
    >
      <Box>
        <Heading fontSize="md">{title}</Heading>
        <Text mt={2}>{description}</Text>
        <Text mt={2} fontSize="sm" color="gray.500">
          Posted by {posted_by_name} • 
          {moment(posted_at).format("lll")}
        </Text>
      </Box>
      <Box>
        {categories?.map((cat: string, i: number) => (
          <Tag
            key={i}
            backgroundColor="blue.200"
            fontSize={17}
            margin={1}
            float="right"
          >
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
