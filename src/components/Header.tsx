import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Box, Heading, Button } from "@chakra-ui/core";

import "./Header.scss";

export interface Props {}

function Header(props: Props) {
  const history = useHistory();
  return (
    <Box
      className="top"
      as="header"
      p={3}
      backgroundColor="blue.900"
      color="white"
    >
      <Box
        maxWidth={800}
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading as="h2">
          <Link to="/">DevDesk</Link>
        </Heading>
        <Box as="nav">
          <Button
            leftIcon="add"
            variantColor="teal"
            size="sm"
            onClick={() => history.push("/create-ticket")}
          >
            Create Ticket
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
