import React from "react";
import Header from "../Components/Header";
import ErrorPageComp from "../Components/ErrorPageComp";
import Footer from "../Components/Footer";
import { Box } from "@chakra-ui/core";
import SEO from "../Components/SEO";

const ErrorPage = () => {
  return (
    <>
      <SEO title="404 ERROR" />
      <Box>
        <Header></Header>
        <ErrorPageComp></ErrorPageComp>
      </Box>
    </>
  );
};

export default ErrorPage;
