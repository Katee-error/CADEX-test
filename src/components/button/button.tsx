"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface ButtonProps {
  text: string;
}
export const ButtonComponent: React.FC<ButtonProps> = ({ text }) => {
  const MotionButton = motion.create(Button);

  return (
    <Link href="/contact-us">
      <MotionButton
        p={{ base: "10px 20px", md: " 5px 40px" }}
        mt='5px'
        borderRadius="10px"
        fontSize={{ base: "14px", md: "sm" }}
        fontWeight={600}
        color="#FFF"
        bg="black"
        boxShadow="1px 2px 5px 0 rgba(0, 0, 0, 0.2)"
        whileHover={{ scale: 1.05 }}
      >
        {text}
      </MotionButton>
    </Link>
  );
};
