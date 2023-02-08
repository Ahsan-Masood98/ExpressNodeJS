import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="https://reactstrap.github.io/logo-white.svg"
            style={{
              height: 40,
              width: 40,
            }}
          />
          Reactstrap
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Footer;
