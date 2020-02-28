import React from "react";
import { Box, Heading, Flex, Text, Button, Link, Image } from "@chakra-ui/core";
import Header from "./Header";

const Hero = props => {
  return (
    <Box
      padding="1.5rem 4rem"
      color="gray.600"
      backgroundColor="#000000"
      backgroundImage="url('https://res.cloudinary.com/gokoura/image/upload/v1582910387/Endless-Constellation_1_t97cdd.svg')"
      backgroundAttachment="fixed"
    >
      <Header></Header>
      <Box display={{ md: "flex" }} textAlign="center" pt={10}>
        <Box width="100%" py={10}>
          <Heading
            size="2xl"
            as="h1"
            fontWeight="bold"
            fontFamily="Libre Baskerville"
          >
            Meet smarter,
          </Heading>
          <Heading
            size="2xl"
            as="h1"
            fontWeight="bold"
            fontFamily="Libre Baskerville"
          >
            more secure safes locks.
          </Heading>
          <Text color="gray.600" fontSize="xl" fontWeight="light" py="10">
            Let us maximize your business safety <br></br> with cuting edge
            Facial Recognition powered safe locks.
          </Text>
          <Button variantColor="red" size="lg">
            Talk to us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
