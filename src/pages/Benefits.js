import React from "react";
import { Box, Heading, Flex, Text, Button, Image } from "@chakra-ui/core";

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
      <Text fontSize="sm">PRODUCT WITH BENEFITS</Text>
      <Heading as="h1" fontFamily="Libre Baskerville" size="lg" py={5}>
        Why should you use Soley?
      </Heading>
      <Text fontSize="md" color="gray.600" fontWeight="medium">
        We use the power of Artifitial intelligence <br></br>to make our
        customers's life easier and safer.
      </Text>
      <Flex py={10} align="start">
        <Box flexGrow={1} flexBasis={0} mx={3}>
          <Image
            src="https://res.cloudinary.com/gokoura/image/upload/v1582937079/25496_Converted_hprndj.svg"
            alt="lock"
            size="120px"
            margin="0 auto 10px auto"
          ></Image>
          <Text fontSize="xl" fontWeight="bold" pb="2">
            Secure
          </Text>
          <Text fontWeight="light" fontSize="lg">
            Soley is very secure as there is simply no access to the lock –
            unlike mechanical locks which can be lock picked.
          </Text>
        </Box>
        <Box flexGrow={1} flexBasis={0} mx={3}>
          <Image
            src="https://res.cloudinary.com/gokoura/image/upload/v1582937960/circuit_vzywb9.svg"
            alt="lock"
            size="120px"
            margin="0 auto 10px auto"
          ></Image>
          <Text fontSize="xl" fontWeight="bold" pb="2">
            Reliable
          </Text>
          <Text fontWeight="light" fontSize="lg">
            Electronic mechanisms are far more durable than physical ones.
            There’s very little which can be broken or worn out.
          </Text>
        </Box>
        <Box flexGrow={1} flexBasis={0} mx={3}>
          <Image
            src="https://res.cloudinary.com/gokoura/image/upload/v1582937682/time_uqltwb.svg"
            alt="lock"
            size="120px"
            margin="0 auto 10px auto"
          ></Image>
          <Text fontSize="xl" fontWeight="bold" pb="2">
            Easy Access
          </Text>
          <Text fontWeight="light" fontSize="lg">
            Soley uses Face Detection techniques to unlock your safe, it takes
            almost not time.
          </Text>
        </Box>
        <Box flexGrow={1} flexBasis={0} mx={3}>
          <Image
            src="https://res.cloudinary.com/gokoura/image/upload/v1582938129/key_pkmkfx.svg"
            alt="lock"
            size="120px"
            margin="0 auto 10px auto"
          ></Image>
          <Text fontSize="xl" fontWeight="bold" pb="2">
            Convenience
          </Text>
          <Text fontWeight="light" fontSize="lg">
            You never have to worry about carrying around or losing your locking
            key again.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Benefits;
