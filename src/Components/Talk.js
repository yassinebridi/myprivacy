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
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Talk = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "talk.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
            src
          }
        }
      }
    }
  `);
  return (
    <>
      <Box
        px={[4, 16, 8, 16]}
        pt={[8]}
        pb={[8, 8, 0, 0]}
        textAlign="center"
        color={["white", "white", "gray.600", "gray.600"]}
        background={[
          "rgba(210, 26, 26, 0.5)",
          "rgba(210, 26, 26, 0.5)",
          "rgb(255, 241, 241)",
          "rgb(255, 241, 241)"
        ]}
        backgroundImage={[
          `url(${data.file.childImageSharp.fluid.src})`,
          `url(${data.file.childImageSharp.fluid.src})`,
          "none",
          "none"
        ]}
        backgroundAttachment={["fixed", "fixed", "none", "none"]}
        textShadow="2px 2px 5px rgba(0,0,0,0.26)"
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
              making it super secure.
            </Text>
          </Box>
          <Box
            flexGrow={1}
            flexBasis={0}
            ml={15}
            display={["none", "none", "block", "block"]}
          >
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="person talking"
              style={{ width: "100%", transform: "scaleX(-1)" }}
            />
          </Box>
        </Flex>
      </Box>
      <Form></Form>
    </>
  );
};

export default Talk;
