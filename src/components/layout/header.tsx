import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../logo";
import { ButtonComponent } from "../button";

export const Header: React.FC = () => {
  return (
    <Box
      id="sticky-nav"
      py={["15px", "20px"]}
      w="100%"
      bg="white"
      borderBottom="1px solid #eaeaea"
      boxShadow="0px -2px 10px rgba(0, 0, 0, 0.1)"
    >
      <Container maxW="container.xl">
        <Flex
          as="header"
          justifyContent="space-between"
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Logo />
          <ButtonComponent text="Contact us" />
        </Flex>
      </Container>
    </Box>
  );
};
