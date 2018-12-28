import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Categories.css";

class Categories extends Component {

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="category-navbar">
          <Nav navbar>
            <NavItem color="danger">
              <Link to="/" className="mx-5">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/deals/" className="mx-5">
                Hot Deals
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/coffees/" className="mx-5">
                Coffees
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/teas/" className="mx-5">
                Teas
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/accessories/" className="mx-5">
                Accessories
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Categories;
