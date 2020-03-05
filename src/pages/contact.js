import React from "react";
import Header from "../Components/Header";
import Talk from "../Components/Talk";
import Footer from "../Components/Footer";
import { Box } from "@chakra-ui/core";

const contactPage = () => {
  return (
    <Box>
      <Header></Header>
      <Talk></Talk>
      <Footer></Footer>
    </Box>
  );
};

export default contactPage;
