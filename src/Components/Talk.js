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
        px={[4, 16, 8, 16]}
        pt={[8]}
        pb={[8, 8, 0, 0]}
        textAlign="center"
        color="gray.600"
        bg="#fff1f1"
      >
        <Flex align="center">
          <Box
            flexGrow={1}
            flexBasis={0}
            mr={15}
            textAlign="left"
            display="flex"
            flexDirection="column"
          >
            <Text
              fontFamily="Libre Baskerville"
              fontSize={["1xl", "2xl", "4xl", "5xl"]}
              fontWeight="bold"
              mb={[1, 2, 3, 4]}
            >
              Let's Talk
            </Text>
            <Text fontSize={["xs", "sm", "lg", "xl"]} mt={[1, 2, 3, 4]}>
              Tell us about your project, get a quick estimate and a plan for
              making it live.
            </Text>
          </Box>
          <Box
            flexGrow={1}
            flexBasis={0}
            ml={15}
            display={["none", "none", "block", "block"]}
          >
            <Image
              transform="scaleX(-1)"
              src="https://res.cloudinary.com/gokoura/image/upload/v1583368466/talk_umxoyw.svg"
              alt="person talking"
              width="100%"
            ></Image>
          </Box>
        </Flex>
      </Box>
      {/* <Box px={40} py={4}>
        <Form></Form>
      </Box> */}
    </>
  );
};

export default Talk;
