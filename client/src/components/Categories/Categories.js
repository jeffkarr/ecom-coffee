import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import "./Categories.css";

const Categories = () => {
  return (
    <div>
      <Navbar color="light" light expand="md" className="category-navbar">
        <Nav navbar>
          <NavItem color="danger">
            <NavLink href="/" className="mx-4">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/deals/" className="mx-4">
              Hot Deals
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/coffees/" className="mx-4">
              Coffees
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/teas/" className="mx-4">
              Teas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/accessories/" className="mx-4 ">
              Accessories
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/wish/" className="mx-4">
              Wish List
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cart/" className="ml-4">
              Shopping Cart
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Categories;
