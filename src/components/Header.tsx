import React from "react";
import { Box, Heading, Text, Tag } from "@chakra-ui/core";

export interface Props {}

function Header(props: Props) {
  return (
    <Box
      as="header"
      p={3}
      display="flex"
      justifyContent="flex-end"
      backgroundColor="blue.900"
      color="white"
    >
      Header.tsx
    </Box>
  );
}

export default Header;
