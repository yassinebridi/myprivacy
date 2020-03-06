import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Image,
  Stack
} from "@chakra-ui/core";

const Feature = ({ image, title, desc }) => {
  return (
    <Box flexGrow={1} flexBasis={0} mx={3}>
      <Image
        src={image}
        alt="lock"
        size="120px"
        margin="0 auto 10px auto"
      ></Image>
      <Text fontSize="xl" fontWeight="bold" pb="2">
        {title}
      </Text>
      <Text fontWeight="light" fontSize="lg">
        {desc}
      </Text>
    </Box>
  );
};

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

      <Stack isInline spacing={8} py={10} align="start">
        <Feature
          title="Secure"
          desc="Soley is very secure as there is simply no access to the lock –
            unlike mechanical locks which can be lock picked."
          image="https://res.cloudinary.com/gokoura/image/upload/v1582937079/25496_Converted_hprndj.svg"
        />
        <Feature
          title="Reliable"
          desc="Electronic mechanisms are far more durable than physical ones.
            There’s very little which can be broken or worn out."
          image="https://res.cloudinary.com/gokoura/image/upload/v1582937960/circuit_vzywb9.svg"
        />
        <Feature
          title="Easy Access"
          desc="Soley uses Face Detection techniques to unlock your safe, it takes
            almost not time."
          image="https://res.cloudinary.com/gokoura/image/upload/v1582937682/time_uqltwb.svg"
        />
        <Feature
          title="Convenience"
          desc="You never have to worry about carrying around or losing your locking
            key again."
          image="https://res.cloudinary.com/gokoura/image/upload/v1582938129/key_pkmkfx.svg"
        />
      </Stack>
    </Box>
  );
};

export default Benefits;
