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

const Testimony = () => {
  return (
    <Box
      padding="2rem 4rem"
      margin="1.5rem 4rem"
      borderRadius={20}
      textAlign="center"
      color="gray.600"
    >
      <Box>
        <Text fontSize="sm">LOVED BY CUSTOMERS</Text>
        <Heading as="h1" fontFamily="Libre Baskerville" size="lg" py={5}>
          Why do people Love us?
        </Heading>
      </Box>
      <Flex py={10} align="start">
        <Flex flexGrow={1} flexBasis={0} mr={15} flexDirection="column">
          <Text
            fontWeight="extrabold"
            fontSize="2xl"
            fontFamily="Libre Baskerville"
            textAlign="left"
          >
            Having worked intensively with Soley on multiple projects, our
            partnership has been a professional and productive experience with
            impressive results to date. The team is responsive, full of ideas
            and delivers on their commitments. I can highly recommend Soley as a
            serious partner in modern Security involving AI and Face Deteciton
            technologies.
          </Text>
          <Stack isInline my={10}>
            <Icon name="star" size="20px" color="yellow.400" />
            <Icon name="star" size="20px" color="yellow.400" />
            <Icon name="star" size="20px" color="yellow.400" />
            <Icon name="star" size="20px" color="yellow.400" />
            <Icon name="star" size="20px" color="yellow.400" />
          </Stack>
          <Flex>
            <Avatar
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
              mr={4}
            />
            <Box textAlign="left">
              <Text fontWeight="bold">Segun Adebayo</Text>
              <Text fontWeight="medium">Maker and maintainer of ChakraUI</Text>
            </Box>
          </Flex>
        </Flex>
        <Box flexGrow={1} flexBasis={0} ml={15} mt={55}>
          <Image
            src="https://res.cloudinary.com/gokoura/image/upload/v1583114338/1041_Converted_iafqmf.svg"
            alt="lock"
            width="100%"
          ></Image>
        </Box>
      </Flex>
    </Box>
  );
};

export default Testimony;
