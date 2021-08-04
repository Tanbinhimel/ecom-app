import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ cartLength }) => {
  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Container className="mx-2">
        <Link className="navbar-brand" to="/">
          Ecom-app
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
            <NavLink className="nav-link" to="/cart">
              Cart{" "}
              <span className="badge badge-primary">
                {cartLength !== 0 ? cartLength : null}
              </span>
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
