import React from "react";
import { Link } from "gatsby";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";
import { MdClose, MdMenu } from "react-icons/md";
import urlSlug from "url-slug";
import styled from "styled-components";

const Overlay = styled(Box)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: 600;
  &:hover {
    color: #e53e3e;
  }
`;

const MenuItems = ({ children, slug, mobile }) => (
  <StyledLink
    to={slug}
    mt={{ base: 4, md: 0 }}
    style={{
      padding: mobile ? "20px 20px" : "0 20px",
      margin: mobile ? "14px 0" : null
    }}
  >
    <Text fontSize={mobile ? "2xl" : null}>{children}</Text>
  </StyledLink>
);

const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  console.log(show);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem 4rem 2rem 4rem"
      color="gray.600"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link to="/">
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Soley Solutions
          </Heading>
        </Link>
      </Flex>

      <Box
        as={show ? MdClose : MdMenu}
        display={{ sm: "block", md: "none" }}
        onClick={handleToggle}
        size="28px"
        color="gray.600"
      ></Box>

      <Box
        display={{
          xs: "none",
          sm: "none",
          md: "flex"
        }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        justifyContent="flex-end"
      >
        <MenuItems slug="/">Home</MenuItems>
        <MenuItems slug="/about">About</MenuItems>
        <MenuItems slug="/blog">Blog</MenuItems>
        <MenuItems slug="/contact">Contact us</MenuItems>
      </Box>
      <Overlay
        display={{
          xs: show ? "block" : "none",
          sm: show ? "block" : "none",
          md: "none"
        }}
        zIndex={1}
        px={8}
        py={10}
        alignItems="center"
        flexGrow={1}
        justifyContent="flex-end"
      >
        <Box mb={8}>
          <MenuItems mobile slug="/">
            Home
          </MenuItems>
          <MenuItems mobile slug="/about">
            About
          </MenuItems>
          <MenuItems mobile slug="/blog">
            Blog
          </MenuItems>
          <MenuItems mobile slug="/contact">
            Contact us
          </MenuItems>
        </Box>
        <Flex
          align="center"
          justifyContent="space-between"
          padding="0 15px"
          mt={8}
        >
          <Box
            as={show ? MdClose : MdMenu}
            display={{ sm: "block", md: "none" }}
            onClick={handleToggle}
            size="40px"
            color="gray.600"
          ></Box>
          <Link to="/">
            <Text fontSize="3xl" fontWeight="bold">
              Soley
            </Text>
          </Link>
        </Flex>
      </Overlay>
    </Flex>
  );
};

export default Header;
