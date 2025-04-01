import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const Logo: React.FC = () => {
  return (
    <Box>
      <Link href="/" passHref>
        <Text as='h1' fontSize='24px'>Some Company</Text>
      </Link>
    </Box>
  );
};
