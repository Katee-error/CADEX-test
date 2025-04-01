import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";


export const Footer: React.FC = () => {
  return (
    <Box
      py={["15px", "40px"]}
      textAlign='center'
      w="100%"
      bg="white"
      borderTop="1px solid #eaeaea"
      boxShadow="0px -2px 10px rgba(0, 0, 0, 0.1)"
    >
      <Container maxW="container.xl">
        <Text fontSize='22px' fontWeight='600'>Some Company 2024</Text>
      </Container>
    </Box>
  );
};
