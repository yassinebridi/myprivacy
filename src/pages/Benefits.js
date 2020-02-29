import React from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";

const Benefits = () => {
  return (
    <Box
      padding="2rem 4rem"
      margin="1.5rem 4rem"
      borderRadius={20}
      textAlign="center"
      bg="#fafafa"
      color="gray.600"
    >
      <Text fontSize="sm">SITES WITH BENEFITS</Text>
      <Heading as="h1" fontFamily="Libre Baskerville" size="lg" py={5}>
        Why you should use Soley?
      </Heading>
      <Text fontSize="md" color="gray.600" fontWeight="medium">
        We use the power of Artifitial intelligence <br></br>to make our
        customers's life easier and safer.
      </Text>
      <Flex py={10}>
        <Box>
          <Text fontSize="xl" fontWeight="bold" pb="2">
            Secure
          </Text>
          <Text fontWeight="light" fontSize="xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          </Text>
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold" pb="2">
            Reliable
          </Text>
          <Text fontWeight="light" fontSize="xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          </Text>
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold" pb="2">
            Easy Access
          </Text>
          <Text fontWeight="light" fontSize="xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          </Text>
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold" pb="2">
            Convenience
          </Text>
          <Text fontWeight="light" fontSize="xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Benefits;
