import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text, Tag } from "@chakra-ui/core";

export interface Props {}

function Header(props: Props) {
  return (
    <Box as="header" p={3} backgroundColor="blue.900" color="white">
      <Box
        maxWidth={800}
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading as="h2">DevDesk</Heading>
        <Box as="nav">
          <Link to="/dashboard">Dashboard</Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
