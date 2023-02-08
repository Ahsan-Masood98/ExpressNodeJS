import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand="lg" className="shadow mb-3">
        <NavbarBrand>MERN STACK BOOTCAMP</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="addProduct" className="nav-link">
                Add Product
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cart" className="nav-link">
                Cart
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/auth/login" className="nav-link">
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
