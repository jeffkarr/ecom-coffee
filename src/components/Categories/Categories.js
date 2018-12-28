import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import "./Categories.css";

class Categories extends Component {

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="category-navbar">
          <Nav navbar>
            <NavItem color="danger">
              <NavLink href="/" className="mx-5">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/deals/" className="mx-5">
                Hot Deals
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/coffees/" className="mx-5">
                Coffees
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/teas/" className="mx-5">
                Teas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/accessories/" className="mx-5">
                Accessories
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Categories;
