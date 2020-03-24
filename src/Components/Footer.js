import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Divider,
  Link
} from "@chakra-ui/core";
import { Link as LinkGatsby } from "gatsby";
import { GoMarkGithub } from "react-icons/go";

const Testimony = () => {
  return (
    <Box
      padding="2rem 4rem"
      px={{ xs: 2, sm: 4, md: 8, xl: 16 }}
      py={{ xs: 2, sm: 4, md: 6, xl: 8 }}
      mt={{ xs: 1, sm: 3, md: 4, xl: 6 }}
      mr={{ xs: 2, sm: 4, md: 6, xl: 8 }}
      mb={0}
      ml={{ xs: 2, sm: 4, md: 6, xl: 8 }}
      borderRadius="20px 20px 0 0"
      textAlign="center"
      color="gray.200"
      bg="black"
    >
      <Box py={10}>
        <Text
          fontSize={["xs", "xs", "xs", "sm"]}
          color="red.400"
          fontWeight="medium"
        >
          PROMOTIONS UP TO 40%
        </Text>
        <Heading
          as="h1"
          fontFamily="Libre Baskerville"
          fontSize={["md", "lg", "xl", "2xl"]}
          py={5}
        >
          Ready to try out MyPrivacy?
        </Heading>
        <Text
          color="gray.500"
          fontSize={["xs", "sm", "md", "lg"]}
          fontWeight="medium"
        >
          Start your super-secure business life with MyPrivacy.
        </Text>
      </Box>
      <LinkGatsby to="contact">
        <Button variantColor="red" size="lg" my={2}>
          Talk to us
        </Button>
      </LinkGatsby>
      <Divider borderColor="gray.800" my={10} />
      <Box display="flex" justifyContent="space-between">
        <Text
          textAlign="left"
          color="gray.400"
          fontSize={["xs", "xs", "xs", "sm"]}
        >
          © MyPrivacy.tech - All rights reserved.
        </Text>
        <Box display="flex" alignItems="center">
          <Box as={GoMarkGithub} size="20px" color="gray.400" mr={1} />
          <Link
            isExternal
            href="https://github.com/yassinebridi/soley"
            textAlign="left"
            color="gray.400"
            fontSize={["xs", "xs", "xs", "sm"]}
          >
            Github
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimony;
