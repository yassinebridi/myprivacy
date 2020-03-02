import React from "react";
import { Link } from "gatsby";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";
import urlSlug from "url-slug";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: block;
  padding: 0 20px;
  font-weight: 600;
  &:hover {
    color: #e53e3e;
  }
`;

const MenuItems = ({ children }) => (
  <StyledLink to={`/${urlSlug(children)}`} mt={{ base: 4, md: 0 }}>
    <Text>{children}</Text>
  </StyledLink>
);

const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0 0 2rem 0"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link to="/">
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Soley Solutions
          </Heading>
        </Link>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        justifyContent="flex-end"
      >
        <MenuItems>Home</MenuItems>
        <MenuItems>About</MenuItems>
        <MenuItems>Blog</MenuItems>
        <MenuItems>Contact us</MenuItems>
      </Box>
    </Flex>
  );
};

export default Header;