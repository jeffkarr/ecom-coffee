import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, Input } from "reactstrap";
import { Navbar } from "reactstrap";
//import { Card, CardDeck, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import { fetchCartItems } from "../../actions/cartActions";

import "./CartPage.css";

class CartPage extends Component {
  constructor(props) {
    super(props);

    this.props.fetchCartItems();
  }

  render() {
    console.log(this.props);

    return (
      <section>
        <Container fluid>
          <Navbar color="light" light id="shoppingNav">
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <h2 id="shopping">Your Shopping Cart</h2>
            </Col>
          </Navbar>
          <Container fluid>
            <Row>
              <Col size="4" className="billingForm">
                <Container>
                  <h2 className="mb-4">Billing Information</h2>
                  <Form>
                    <Input
                      type="text"
                      name="first-name"
                      id="firstName"
                      placeholder="First Name"
                    />
                    <br />
                    <Input
                      type="text"
                      name="last-name"
                      id="lastName"
                      placeholder="Last Name"
                    />
                    <br />
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                    <br />
                    <Input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Address"
                    />
                    <br />
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                    />
                    <br />
                    <Input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="State"
                    />
                    <br />
                    <Input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      placeholder="ZIP code"
                    />
                    <br />
                    <Input
                      type="text"
                      name="telephone"
                      id="telephone"
                      placeholder="Telephone Number"
                    />
                  </Form>
                  <div className="ml-4 mt-3">
                    <Input type="checkbox"
                      id="create-account" /> Create New Account ?
                  </div>
                  <h2 className="mt-4 mb-2">Shipping Information</h2>
                  <div className="ml-4">
                    <Input type="checkbox"
                      id="shipping-address" /> Ship to a different address ?
                  </div>
                  <Input type="textarea" 
                    name="notes" 
                    id="shipping-notes"
                    className="mt-4"
                    placeholder="Any Special Instructions?" />
                </Container>
              </Col>
              <Col size="4" className="cart-area">
                <Container className="text-center">
                  <h2 className="mb-4 text-center">Your Order</h2>
                  <div>
                  </div>
                  <Button color="danger">Place Order</Button>
                </Container>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    );
  }
}

CartPage.propTypes = {
  fetchCartItems: PropTypes.func.isRequired,
//  cartItemsArray: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  cartStuff: state.cartStuff.cartItems
});

export default connect(
  mapStateToProps,
  { fetchCartItems }
)(CartPage);
