import React from "react";
import { Box, Heading, Flex, Text, Button, Image } from "@chakra-ui/core";
import Header from "./Header";
import { Link } from "gatsby";

const Hero = props => {
  return (
    <Box
      padding="0 0 1.5rem 0"
      color="gray.600"
      backgroundColor="#ffffff"
      backgroundImage="url('https://res.cloudinary.com/gokoura/image/upload/v1582910387/Endless-Constellation_1_t97cdd.svg')"
      backgroundAttachment="fixed"
    >
      <Header></Header>
      <Box display={{ md: "flex" }} textAlign="center" pt={10}>
        <Box width="100%" py={10}>
          <Heading
            fontSize={["2xl", "3xl", "4xl", "5xl"]}
            as="h1"
            fontWeight="bold"
            fontFamily="Libre Baskerville"
          >
            Meet smarter,<br></br>more secure safes locks.
          </Heading>
          <Text
            color="gray.600"
            fontSize={["sm", "sm", "lg", "xl"]}
            fontWeight="light"
            py={[4, 6, 8, 10]}
          >
            Let us maximize your business safety <br></br> with cuting edge
            Facial Recognition powered safe locks.
          </Text>
          <Link to="contact">
            <Button variantColor="red" size="lg" my={[4, 2, 2, 2]}>
              Talk to us
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
