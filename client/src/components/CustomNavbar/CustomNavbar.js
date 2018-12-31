import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";
import { Col, Row } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./CustomNavbar.css";

class CustomNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleWishModal = this.toggleWishModal.bind(this);
    this.toggleCartModal = this.toggleCartModal.bind(this);
    this.redirectToWishPage = this.redirectToWishPage.bind(this);
    this.redirectToCartPage = this.redirectToCartPage.bind(this);

    this.state = {
      isOpen: false,
      cartModal: false,
      wishModal: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleWishModal(event) {
    event.preventDefault();
    this.setState({
      wishModal: !this.state.wishModal
    });
  }

  toggleCartModal(event) {
    event.preventDefault();
    this.setState({
      cartModal: !this.state.cartModal
    });
  }

  redirectToWishPage() {
    window.location.href = "/wish/";
  }
  redirectToCartPage() {
    window.location.href = "/cart/";
  }

  render() {
    return (
      <div>
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
                <NavLink  
                  onClick={this.toggleWishModal}
                  className="mr-3">
                  <Row>
                    <i className="far fa-heart" />
                    <Badge color="danger" className="ml-2">
                      0
                    </Badge>
                  </Row>
                  <Row>Your Wishlist</Row>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={this.toggleCartModal}
                  className="mx-5"
                >
                  <Row>
                    <i className="fas fa-shopping-cart" />
                    <Badge color="danger" className="ml-2">
                      0
                    </Badge>
                  </Row>
                  <Row>Your Cart</Row>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Modal
          isOpen={this.state.wishModal}
          toggle={this.togglewishModal}
        >
          <ModalHeader toggle={this.toggleWishModal}>
            Your Wish List
          </ModalHeader>
          <ModalBody>
            <p>selected items will appear here.</p>
            <p> along with a button to remove it.</p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              href="/wish/"
              onClick={this.toggleWishModal & this.redirectToWishPage}
          >
            See Wishlist
            </Button>
            <Button
              color="secondary"
              onClick={this.toggleWishModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.cartModal}
          toggle={this.toggleCartModal}
        >
          <ModalHeader toggle={this.toggleCartModal}>
            Your Shopping Cart
          </ModalHeader>
          <ModalBody>
            <p>selected items will appear here.</p>
            <p> along with a button to remove it.</p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              href="/cart/"
              onClick={this.toggleCartModal & this.redirectToCartPage}
            >
              See Cart
            </Button>
            <Button 
              color="secondary" 
              onClick={this.toggleCartModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CustomNavbar;
