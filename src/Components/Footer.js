import React from "react";
import { Box, Heading, Flex, Text, Button, Divider } from "@chakra-ui/core";
import { Link } from "gatsby";

const Testimony = () => {
  return (
    <Box
      padding="2rem 4rem"
      margin="1.5rem 4rem 0 4rem"
      borderRadius="20px 20px 0 0"
      textAlign="center"
      color="gray.200"
      bg="black"
    >
      <Box py={10}>
        <Text fontSize="sm" color="red.400" fontWeight="medium">
          PROMOTIONS UP TO 40%
        </Text>
        <Heading as="h1" fontFamily="Libre Baskerville" size="lg" py={5}>
          Ready to try out Soley?
        </Heading>
        <Text color="gray.500" fontSize="xl" fontWeight="medium">
          Start your super-secure business life with Soley.
        </Text>
      </Box>
      <Link to="contact">
        <Button variantColor="red" size="lg" my={2}>
          Talk to us
        </Button>
      </Link>
      <Divider borderColor="gray.800" my={10} />
      <Text textAlign="left" color="gray.400">
        © Soley.tech - All rights reserved.
      </Text>
    </Box>
  );
};

export default Testimony;
