import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CustomNavbar from "../../components/CustomNavbar";
import Categories from "../../components/Categories";
import { Container } from "reactstrap";
import { Card, CardBody, Button } from "reactstrap";
import { Row, Form } from "reactstrap";

import { fetchDealItems } from "../../actions/dealActions";
import { addDealToCart } from "../../actions/cartActions";
import { fetchWishItems, addDealToWish } from "../../actions/wishActions";

import "./DealPage.css";

class DealPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dealQty: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.onAddDealToCart = this.onAddDealToCart.bind(this);
    this.onAddDealToWish = this.onAddDealToWish.bind(this);

    this.props.fetchDealItems();
  }

  handleChange(event) {
    this.setState({ dealQty: event.target.value });
  }

  onAddDealToCart(event) {
    event.preventDefault(event);
    let cartDealItemId = event.target.id;
    let cartDealItemQty = this.state.dealQty;
    let tempCartItem = this.props.deal.filter(dealItem => dealItem.itemId === cartDealItemId);
    let cartId = Math.floor(Math.random() * 1000) + 1;
    let newCartItem = {
      cartId: cartId,
      itemId: tempCartItem[0].itemId,
      category: tempCartItem[0].category,
      name: tempCartItem[0].name,
      price: tempCartItem[0].price,
      description: tempCartItem[0].description,
      image: tempCartItem[0].image,
      quantity: cartDealItemQty
    };
    this.props.onAddDealToCart(newCartItem);
    this.setState({
      dealQty: 1
    });
  }

  onAddDealToWish(event) {
    event.preventDefault(event);
    let wishDealItemId = event.target.id;
    let wishDealItemQty = this.state.dealQty;
    let tempWishItem = this.props.deal.filter(dealItem => dealItem.itemId === wishDealItemId);
    let wishId = Math.floor(Math.random() * 1000) + 1;
    let newWishItem = {
      wishId: wishId,
      itemId: tempWishItem[0].itemId,
      category: tempWishItem[0].category,
      name: tempWishItem[0].name,
      price: tempWishItem[0].price,
      description: tempWishItem[0].description,
      image: tempWishItem[0].image,
      quantity: wishDealItemQty
    };
    this.props.onAddDealToWish(newWishItem);
    this.setState({
      dealQty: 1
    });
  }

  render() {
    return (
      <div>
        <CustomNavbar />
        <Categories />
        <section>
          <Container fluid className="deal-container">
            {this.props.deal.length ?
              <React.Fragment>
                {this.props.deal.map(item => (
                  <Card key={item.itemId} className="deal-card">
                    <div>
                      <div className="deal-overlay"></div>
                      <div className="deal-logo">Hot Deal !</div>
                      <img
                        src={item.image}
                        alt={item.image}
                        className="deal-card-img"
                      />
                    </div>
                    <div>
                      <CardBody className="text-center deal-card-body">
                        <div className="deal-card-body-title-area">
                          <h5>{item.name}</h5>
                        </div>
                        <div className="deal-card-body-description-area">
                          <p>
                            <small>{item.description}</small>
                          </p>
                        </div>
                        <div className="deal-card-body-price-area">
                          <h5>$ {item.price} USD</h5>
                        </div>
                      </CardBody>
                    </div>
                    <Form>
                      <div>
                        <Row className="deal-qty-area">
                          <p className="mx-3 pt-2 pl-5">
                            <b>Quantity</b>
                          </p>
                          <select
                            className="deal-qty-select"
                            value={this.state.value}
                            onChange={this.handleChange}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </Row>
                      </div>
                      <div className="deal-btn-area">
                        <Button
                          onClick={this.onAddDealToWish}
                          name="wishBtn"
                          id={item.itemId}
                          color="danger"
                          className="btn btn-sm deal-card-wish-btn"
                        >
                          <i className="far fa-heart" /> Wish List
                      </Button>
                        <Button
                          onClick={this.onAddDealToCart}
                          name="cartBtn"
                          id={item.itemId}
                          color="danger"
                          className="ml-2 btn btn-sm deal-card-cart-btn"
                        >
                          <i className="fas fa-cart-plus mr-1" />
                          Add to Cart
                      </Button>
                      </div>
                    </Form>
                  </Card>
                ))}
              </React.Fragment> : <div>
                <p> No items to display.</p>
              </div>}
          </Container>
        </section>
      </div>
    );
  }
}

DealPage.propTypes = {
  fetchDealItems: PropTypes.func.isRequired,
  fetchWishItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  deal: state.deal.dealItems,
  cart: state.cart.cartItems,
  wish: state.wish.wishItems
});

const mapDispatchToProps = {
  fetchDealItems: fetchDealItems,
  fetchWishItems: fetchWishItems,
  onAddDealToCart: addDealToCart,
  onAddDealToWish: addDealToWish
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DealPage);

