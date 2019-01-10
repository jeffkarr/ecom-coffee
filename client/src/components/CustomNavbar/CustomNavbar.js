import React, { Component } from "react";
import { connect } from "react-redux";
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
import { Row } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Table } from "reactstrap";

import { getCartItems, getCartCosts } from "../../reducers";

import "./CustomNavbar.css";

class CustomNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleWishModal = this.toggleWishModal.bind(this);
    this.toggleCartModal = this.toggleCartModal.bind(this);

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

  render() {
    let cartItemsCount = this.props.cartItemsList.length;

    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/" className="ml-1">
            <i className="fas fa-coffee mr-3" />
            Karr's Coffee & Tea Company
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.toggleWishModal} className="mr-3">
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
                <NavLink onClick={this.toggleCartModal} className="mx-5">
                  <Row>
                    <i className="fas fa-shopping-cart" />
                    <Badge color="danger" className="ml-2">
                      {cartItemsCount}
                    </Badge>
                  </Row>
                  <Row>Your Cart</Row>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Modal isOpen={this.state.wishModal} toggle={this.togglewishModal}>
          <ModalHeader toggle={this.toggleWishModal}>
            Your Wish List
          </ModalHeader>
          <ModalBody>
            <p>selected items will appear here.</p>
            <p> along with a button to add to cart.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" href="/wish/">
              See Wishlist
            </Button>
            <Button color="secondary" onClick={this.toggleWishModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.cartModal} toggle={this.toggleCartModal}>
          <ModalHeader toggle={this.toggleCartModal}>
            Your Shopping Cart
          </ModalHeader>
          <ModalBody>
            {!this.props.cartItemsList.length ? (
              <h6 className="mt-3">No Items in cart.</h6>
            ) : (
              <Table borderless className="cart-modal-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Item Price($)</th>
                    <th>Cost($)</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cartItemsList.map(item => (
                    <tr>
                      <td key={item.cartId}>
                        <p>{item.name}</p>
                      </td>
                      <td className="text-center">
                        <p>{item.quantity}</p>
                      </td>
                      <td>
                        <p>{item.price}</p>
                      </td>
                      <td>
                        <p>{(item.quantity * item.price).toFixed(2)}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                    <tr>
                      <th />
                      <th />
                      <th>Subtotal($)</th>
                      <td>{(this.props.cartCosts.subtotal).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <th />
                      <th className="text-right"> + </th>
                      <th>Shipping Fee ($)</th>
                      <td> 10.00</td>
                    </tr>
                    <tr>
                      <th />
                      <th />
                      <th> Your Total Cost ($)</th>
                      <td>
                        {(this.props.cartCosts.total).toFixed(2)}
                      </td>
                    </tr>
                </tfoot>
              </Table>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" href="/cart/">
              Edit Cart
            </Button>
            <Button color="secondary" onClick={this.toggleCartModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

//export default CustomNavbar;

//CustomNavbar.propTypes = {
//  coffeeItemsCount: PropTypes.number.isRequired,
//
//};

const mapStateToProps = state => ({
  cartItemsList: getCartItems(state),
  cartItemsCount: state.cart.cartItems.length,
  cartCosts: getCartCosts(state)
});

export default connect(mapStateToProps)(CustomNavbar);
