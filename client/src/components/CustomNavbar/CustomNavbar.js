import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge } from "reactstrap";
import { Col, Row } from 'reactstrap';
import "./CustomNavbar.css";

class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/" className="ml-5">
            <Row>
              <Col>
                <i className="fas fa-coffee" />
              </Col>
              <Col>Karr's Coffee & Tea Company</Col>
            </Row>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/" className="mr-3">
                  <Row>
                    <i className="far fa-heart" />
                    <Badge color="danger" className="ml-2">0</Badge>
                  </Row>
                  <Row>
                    Your Wishlist
                  </Row>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cart/" className="mx-5">
                  <Row>
                    <i className="fas fa-shopping-cart" />
                    <Badge color="danger" className="ml-2">0</Badge>
                  </Row>
                  <Row>
                    Your Cart 
                  </Row>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>;
  }
}

export default CustomNavbar;
