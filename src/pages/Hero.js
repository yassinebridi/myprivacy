import React from "react";
import { Box, Heading, Flex, Text, Button, Link, Image } from "@chakra-ui/core";

const Hero = props => {
  return (
    <Flex
      // align="center"
      // justify="space-between"
      // wrap="wrap"
      padding="1.5rem 4rem"
      background="rgb(2,0,36)"
      background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(95,68,139,1) 49%, rgba(19,29,31,1) 100%)"
      color="white"
      {...props}
    >
      <Box p={2} display={{ md: "flex" }}>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} width={{ md: "40%" }}>
          <Heading
            mt={1}
            size="lg"
            as="h1"
            lineHeight="normal"
            fontWeight="bold"
          >
            Finding customers for your new business
          </Heading>
          <Text mt={2} color="gray.200">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </Text>
        </Box>
        <Box flexShrink="0">
          <Image
            rounded="lg"
            width={{ md: 500 }}
            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default Hero;
