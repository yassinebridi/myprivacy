import React from "react";
import { Box, Heading, Flex, Text, Button, Image } from "@chakra-ui/core";
import Header from "./Header";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Hero = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "product.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 400
            quality: 100
            traceSVG: { color: "#4A5D89", threshold: 75 }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <Box
      padding="0 0 1.5rem 0"
      color="gray.600"
      backgroundColor="#ffffff"
      backgroundImage="url('https://res.cloudinary.com/gokoura/image/upload/v1582910387/Endless-Constellation_1_t97cdd.svg')"
      backgroundAttachment="fixed"
    >
      <Header></Header>
      <Flex
        py={[4, 6, 8, 10]}
        align={["center", "center", "start", "start"]}
        px={[8, 16, 24, 40]}
        flexDirection={{ xs: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Box display={{ md: "flex" }} pt={10} flexGrow={1} flexBasis={0}>
          <Box
            width="100%"
            py={10}
            textAlign={{ xs: "center", sm: "center", md: "left", lg: "left" }}
          >
            <Heading
              fontSize={["2xl", "3xl", "4xl", "5xl"]}
              as="h1"
              fontWeight="bold"
              fontFamily="Libre Baskerville"
            >
              Meet smarter,<br></br>more secure safes locks.
            </Heading>
            <Text
              color="gray.600"
              fontSize={["sm", "sm", "lg", "xl"]}
              fontWeight="light"
              pt={[2, 4, 6, 8]}
              pb={[4, 6, 8, 10]}
            >
              Let us maximize your business safety <br></br> with cuting edge
              Facial Recognition powered safe locks.
            </Text>
            <Link to="contact">
              <Button variantColor="red" size="lg" my={[4, 2, 2, 2]}>
                Talk to us
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          flexGrow={1}
          flexBasis={0}
          display="flex"
          justifyContent="flex-end"
          mr={[16, 16, 0, 0]}
          width={["150px", "200px", "150px", "350px"]}
        >
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="MyPrivacy Product"
            style={{ width: "350px" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
