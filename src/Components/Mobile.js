import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Image,
  List,
  ListItem,
  ListIcon,
  PseudoBox
} from "@chakra-ui/core";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import gp from "../images/gp.svg";
import apple from "../images/apple.svg";

const Mobile = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Box
      px={{ xl: 16, lg: 0 }}
      py={16}
      mx={{ md: 0, xl: 16, lg: 8 }}
      my={{ md: 0, xl: 6, lg: 4 }}
      borderRadius={20}
      textAlign="left"
      bg="#fafafa"
      color="gray.600"
      display="flex"
      alignItems={{ xs: "center", sm: "center", md: "center", lg: "center" }}
      flexDirection={{ xs: "column", sm: "column", md: "row", lg: "row" }}
    >
      <Box
        flexGrow={1}
        flexBasis={0}
        display="flex"
        justifyContent="center"
        width={["150px", "200px", "150px", "250px"]}
      >
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Mobile application"
          style={{ width: "250px" }}
        />
      </Box>
      <Box flexGrow={1} flexBasis={0}>
        <Box textAlign={["center", "center", "left", "left"]} mt={[4, 4, 0, 0]}>
          <Heading
            as="h1"
            fontFamily="Libre Baskerville"
            fontSize={["md", "lg", "xl", "2xl"]}
            pb={4}
          >
            Controlling MyPrivacy<br></br>never been this easy.
          </Heading>
          <Text
            fontSize={["xs", "xs", "sm", "md"]}
            color="gray.600"
            fontWeight="normal"
            mb={8}
          >
            We try to make controlling MyPrivacy as intuitive as possible,
            <br></br>an application for both Android and iOS, to make your life
            easier.
          </Text>
        </Box>
        <List spacing={3} width={["350px", "350px", null, null]}>
          <ListItem fontWeight="semibold">
            <ListIcon icon="check-circle" color="red.500" size="20px" />
            Add and revoke account access.
          </ListItem>
          <ListItem fontWeight="semibold">
            <ListIcon icon="check-circle" color="red.500" size="20px" />
            Get alerted if an intruder trying to access your door, and recieve a
            picture of them. door.
          </ListItem>
          <ListItem fontWeight="semibold">
            <ListIcon icon="check-circle" color="red.500" size="20px" />
            Completely custumizable, alertes, themes..
          </ListItem>
        </List>
        <Flex
          flexDirection={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          margin={[
            "3rem auto 1rem auto",
            "3rem auto 1rem auto",
            "4rem 0 0 0",
            "4rem 0 0 0"
          ]}
          width={["200px", "200px", "100%", "100%"]}
        >
          <PseudoBox
            as={Button}
            py={8}
            flexGrow={1}
            flexBasis={0}
            mr={[0, 0, 4, 4]}
            mb={[4, 4, 0, 0]}
            rounded="10px"
            bg="black"
            color="#fff"
            _hover={{ bg: "#202020" }}
            _active={{
              bg: "#181818"
            }}
          >
            <Image
              src={gp}
              size={["20px", "20px", "30px", "30px"]}
              mr={4}
            ></Image>
            <Box alignItems="baseline" display="flex" flexDirection="column">
              <Text fontWeight="light" fontSize={["xs", "md", "md", "lg"]}>
                GET IT ON
              </Text>
              <Text fontWeight="bold" fontSize={["xs", "md", "md", "lg"]}>
                Google Play
              </Text>
            </Box>
          </PseudoBox>
          <PseudoBox
            as={Button}
            py={8}
            flexGrow={1}
            flexBasis={0}
            mr={[0, 0, 4, 4]}
            mt={[4, 4, 0, 0]}
            rounded="10px"
            bg="black"
            color="#fff"
            _hover={{ bg: "#202020" }}
            _active={{
              bg: "#181818"
            }}
          >
            <Image
              src={apple}
              size={["30px", "30px", "40px", "40px"]}
              mr={2}
            ></Image>
            <Box alignItems="baseline" display="flex" flexDirection="column">
              <Text fontWeight="light" fontSize={["xs", "md", "md", "lg"]}>
                Download on the
              </Text>
              <Text fontWeight="bold" fontSize={["xs", "md", "md", "lg"]}>
                App Store
              </Text>
            </Box>
          </PseudoBox>
        </Flex>
      </Box>
    </Box>
  );
};

export default Mobile;
