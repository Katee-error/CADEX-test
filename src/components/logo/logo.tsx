import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const Logo: React.FC = () => {
  return (
      <Link href="/" passHref>
        <Text as='h1' fontSize='24px' fontWeight='600'>Some Company</Text>
      </Link>
  );
};
