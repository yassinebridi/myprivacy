import React from "react";
import Hero from "../Components/Hero";
import Benefits from "../Components/Benefits";
import Mobile from "../Components/Mobile";
import Testimony from "../Components/Testimony";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Hero></Hero>
      <Benefits></Benefits>
      <Mobile></Mobile>
      <Testimony></Testimony>
      <Footer></Footer>
    </>
  );
};

export default IndexPage;
