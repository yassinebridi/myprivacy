import React from "react";
import { Box, Heading, Flex, Text, Button, Image, Grid } from "@chakra-ui/core";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Feature = ({ image, title, desc, alt }) => {
  return (
    <Box
      mx={{ sm: 6, md: 2, xl: 3 }}
      display={{ sm: "flex", md: "block", lg: "block" }}
      alignItems={{ sm: "center", md: null, lg: null }}
    >
      <Img
        fluid={image}
        alt={alt}
        style={{ width: "120px", margin: "0 auto 10px auto" }}
      />
      <Box
        textAlign={{ sm: "left", md: "center", lg: "center" }}
        ml={{ sm: 6, md: 0, lg: 0 }}
      >
        <Text fontSize={["md", "md", "lg", "xl"]} fontWeight="bold" pb="2">
          {title}
        </Text>
        <Text fontWeight="light" fontSize={["sm", "sm", "md", "lg"]}>
          {desc}
        </Text>
      </Box>
    </Box>
  );
};

const Benefits = () => {
  const data = useStaticQuery(graphql`
    query {
      circuit: file(relativePath: { eq: "circuit.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      key: file(relativePath: { eq: "key.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      lock: file(relativePath: { eq: "lock.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      time: file(relativePath: { eq: "time.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

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
        Why should you use MyPrivacy?
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
        alignItems="baseline"
      >
        <Feature
          title="Secure"
          desc="MyPrivacy is very secure as there is simply no access to the lock –
            unlike mechanical locks which can be lock picked."
          image={data.lock.childImageSharp.fluid}
          alt="lock"
        />
        <Feature
          title="Reliable"
          desc="Electronic mechanisms are far more durable than physical ones.
            There’s very little which can be broken or worn out."
          image={data.circuit.childImageSharp.fluid}
          alt="circuit"
        />
        <Feature
          title="Easy Access"
          desc="MyPrivacy uses Face Detection techniques to unlock your safe, it takes
            almost not time."
          image={data.time.childImageSharp.fluid}
          alt="time"
        />
        <Feature
          title="Convenience"
          desc="You never have to worry about carrying around or losing your locking
            key again."
          image={data.key.childImageSharp.fluid}
          alt="key"
        />
      </Grid>
    </Box>
  );
};

export default Benefits;
