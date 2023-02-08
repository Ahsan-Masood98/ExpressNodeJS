import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BasicLayout;
