import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.scss";

const NavbarMain = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar expanded={expanded} expand="lg" className="NavbarCustom">
        <Navbar.Brand className="Logo">
          <Link
            to="/home"
            onClick={() => {
              setTimeout(() => {
                setExpanded(false);
              }, 150);
            }}
          >
            <Logo />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto Navitems">
            <Nav.Link
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 150)
              }
              as={NavLink}
              to="/logout"
              className="Navitemscontent"
              activeStyle={{
                color: "#13bae5",
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarMain;
