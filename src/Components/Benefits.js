import React from "react";
import { Box, Heading, Flex, Text, Button, Image, Grid } from "@chakra-ui/core";

const Feature = ({ image, title, desc }) => {
  return (
    <Box
      mx={{ sm: 6, md: 2, xl: 3 }}
      display={{ sm: "flex", md: "block", lg: "block" }}
      alignItems={{ sm: "center", md: null, lg: null }}
    >
      <Image
        src={image}
        alt="lock"
        size="120px"
        margin="0 auto 10px auto"
      ></Image>
      <Box
        textAlign={{ sm: "left", md: "center", lg: "center" }}
        ml={{ sm: 6, md: 0, lg: 0 }}
      >
        <Text fontSize={["sm", "md", "lg", "xl"]} fontWeight="bold" pb="2">
          {title}
        </Text>
        <Text fontWeight="light" fontSize={["xs", "sm", "md", "lg"]}>
          {desc}
        </Text>
      </Box>
    </Box>
  );
};

const Benefits = () => {
  return (
    <Box
      px={{ xl: 16, lg: 0 }}
      py={8}
      mx={{ md: 0, xl: 16, lg: 8 }}
      my={{ md: 0, xl: 6, lg: 4 }}
      borderRadius={20}
      textAlign="center"
      bg="#fafafa"
      color="gray.600"
    >
      <Text fontSize={["xs", "xs", "xs", "sm"]}>PRODUCT WITH BENEFITS</Text>
      <Heading
        as="h1"
        fontFamily="Libre Baskerville"
        fontSize={["md", "lg", "xl", "2xl"]}
        py={5}
      >
        Why should you use Soley?
      </Heading>
      <Text
        fontSize={["xs", "xs", "sm", "md"]}
        color="gray.600"
        fontWeight="medium"
      >
        We use the power of Artifitial intelligence <br></br>to make our
        customers's life easier and safer.
      </Text>

      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={10}
        px={{ xs: 8, sm: 12, md: 12 }}
        py={{ xs: 12, sm: 8, md: 8 }}
      >
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
      </Grid>
    </Box>
  );
};

export default Benefits;
