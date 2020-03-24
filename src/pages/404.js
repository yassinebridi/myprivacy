import React from "react";
import Header from "../Components/Header";
import ErrorPageComp from "../Components/ErrorPageComp";
import Footer from "../Components/Footer";
import { Box } from "@chakra-ui/core";

const ErrorPage = () => {
  return (
    <Box>
      <Header></Header>
      <ErrorPageComp></ErrorPageComp>
    </Box>
  );
};

export default ErrorPage;
