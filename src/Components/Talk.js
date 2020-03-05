import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Image,
  Stack,
  Icon,
  Avatar
} from "@chakra-ui/core";
import Form from "./Form";

const Talk = () => {
  return (
    <>
      <Box
        padding="2rem 4rem 0 4rem"
        textAlign="center"
        color="gray.600"
        bg="#fff1f1"
      >
        <Flex align="center">
          <Box flexGrow={1} flexBasis={0} mr={15} textAlign="left">
            <Text
              fontFamily="Libre Baskerville"
              fontSize="4xl"
              fontWeight="bold"
              mb={16}
            >
              Let's Talk
            </Text>
            <Text fontSize="2xl" mt={16}>
              Tell us about your project, get a quick estimate and a plan for
              making it live.
            </Text>
          </Box>
          <Box flexGrow={1} flexBasis={0} ml={15}>
            <Image
              transform="scaleX(-1)"
              src="https://res.cloudinary.com/gokoura/image/upload/v1583368466/talk_umxoyw.svg"
              alt="person talking"
              width="100%"
            ></Image>
          </Box>
        </Flex>
      </Box>
      <Box px={40} py={4}>
        <Form></Form>
      </Box>
    </>
  );
};

export default Talk;
