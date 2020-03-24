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
import man from "../images/man.svg";
import testMan from "../images/testMan.jpeg";

const Testimony = () => {
  return (
    <Box
      // padding="2rem 4rem"
      // margin="1.5rem 4rem"
      borderRadius={20}
      textAlign="center"
      color="gray.600"
      px={{ xl: 16, lg: 0 }}
      py={8}
      mx={{ md: 0, xl: 16, lg: 8 }}
      my={{ md: 0, xl: 6, lg: 4 }}
    >
      <Box>
        <Text fontSize={["xs", "xs", "xs", "sm"]}>LOVED BY CUSTOMERS</Text>
        <Heading
          as="h1"
          fontFamily="Libre Baskerville"
          fontSize={["md", "lg", "xl", "2xl"]}
          py={5}
        >
          Why do people Love us?
        </Heading>
      </Box>
      <Flex py={[4, 6, 8, 10]} align="start">
        <Flex
          flexGrow={1}
          flexBasis={0}
          mr={[0, 0, 0, 15]}
          flexDirection="column"
        >
          <Text
            fontWeight="extrabold"
            fontSize={["md", "lg", "xl", "2xl"]}
            fontFamily="Libre Baskerville"
            textAlign="left"
            px={[12, 20, 32, 0]}
          >
            Having worked intensively with MyPrivacy on multiple hotel projects,
            our partnership has been a professional and productive experience
            with impressive results to date. The product is impressive, fully
            customizable and delivers on its promises. I can highly recommend
            MyPrivacy as a serious tool in modern Security involving AI and Face
            Deteciton technologies, to maximize the security of your projects.
          </Text>
          <Stack
            isInline
            my={[4, 6, 8, 10]}
            pt={[6, 6, 0, 0]}
            justifyContent={["center", "center", "center", "flex-start"]}
          >
            <Icon name="star" size="20px" color="yellow.400" />
            <Icon name="star" size="20px" color="yellow.400" />
            <Icon name="star" size="20px" color="yellow.400" />
            <Icon name="star" size="20px" color="yellow.400" />
            <Icon name="star" size="20px" color="yellow.400" />
          </Stack>
          <Flex
            px={[4, 6, 8, 0]}
            justifyContent={["center", "center", "center", "flex-start"]}
            alignItems="center"
          >
            <Avatar
              name="William Alfie"
              src={testMan}
              mr={4}
              width={["32px", "32px", "48px", "48px"]}
              height={["32px", "32px", "48px", "48px"]}
            />
            <Box textAlign="left">
              <Text fontWeight="bold" fontSize={["sm", "sm", "md", "md"]}>
                William Alfie
              </Text>
              <Text fontWeight="medium" fontSize={["xs", "xs", "sm", "sm"]}>
                CEO & Co-founder of @MayaHotels
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Box
          flexGrow={1}
          flexBasis={0}
          ml={15}
          mt={55}
          display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
        >
          <Image src={man} alt="lock" width="100%"></Image>
        </Box>
      </Flex>
    </Box>
  );
};

export default Testimony;
