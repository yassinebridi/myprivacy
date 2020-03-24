import React from "react";
import Header from "../Components/Header";
import Talk from "../Components/Talk";
import Footer from "../Components/Footer";
import { Box } from "@chakra-ui/core";
import SEO from "../Components/SEO";

const contactPage = () => {
  return (
    <>
      <SEO title="Talk to us" pathname="/contact" />
      <Box>
        <Header></Header>
        <Talk></Talk>
        <Footer></Footer>
      </Box>
    </>
  );
};

export default contactPage;
