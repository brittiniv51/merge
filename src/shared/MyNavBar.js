import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const NavBar = () => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink tag={RRNavLink} to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/addfood">
            Rules
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/competition">
            Competition
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/challenge">
            Challenge
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
};

export default NavBar;
