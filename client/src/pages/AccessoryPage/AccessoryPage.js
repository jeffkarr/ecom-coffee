import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CustomNavbar from "../../components/CustomNavbar";
import Categories from "../../components/Categories";
import { Container } from "reactstrap";
import { Card, CardImg, CardBody, Button } from "reactstrap";
import { Row, Form } from "reactstrap";

import { fetchAccessoryItems } from "../../actions/accessoryActions";
import { fetchWishItems } from "../../actions/wishActions";
import { addAccessoryToCart } from "../../actions/cartActions";
import { addAccessoryToWish } from "../../actions/wishActions";

import "./AccessoryPage.css";

class AccessoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accQty: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.onAddAccessoryToCart = this.onAddAccessoryToCart.bind(this);
    this.onAddAccessoryToWish = this.onAddAccessoryToWish.bind(this);

    this.props.fetchAccessoryItems();
  }

  handleChange(event) {
    event.preventDefault(event);
    this.setState({ accQty: event.target.value });
  }

  onAddAccessoryToCart(event) {
    event.preventDefault(event);
    let cartAccessoryItemId = event.target.id;
    let cartAccessoryItemQty = this.state.accQty;
    let tempCartItem = this.props.accessory.filter(accessoryItem => accessoryItem.itemId === cartAccessoryItemId);
    let cartId = Math.floor(Math.random() * 1000) + 1;
    let newCartItem = {
      cartId: cartId,
      itemId: tempCartItem[0].itemId,
      category: tempCartItem[0].category,
      name: tempCartItem[0].name,
      price: tempCartItem[0].price,
      description: tempCartItem[0].description,
      image: tempCartItem[0].image,
      quantity: cartAccessoryItemQty
    };
    this.props.onAddAccessoryToCart(newCartItem);
    this.setState({
      accQty: 1
    });
  }

  onAddAccessoryToWish(event) {
    event.preventDefault(event);
    let wishAccessoryItemId = event.target.id;
    let wishAccessoryItemQty = this.state.accQty;
    let tempWishItem = this.props.accessory.filter(accessoryItem => accessoryItem.itemId === wishAccessoryItemId);
    let wishId = Math.floor(Math.random() * 1000) + 1;
    let newWishItem = {
      wishId: wishId,
      itemId: tempWishItem[0].itemId,
      category: tempWishItem[0].category,
      name: tempWishItem[0].name,
      price: tempWishItem[0].price,
      description: tempWishItem[0].description,
      image: tempWishItem[0].image,
      quantity: wishAccessoryItemQty
    };
    this.props.onAddAccessoryToWish(newWishItem);
    this.setState({
      accQty: 1
    });
  }



  render() {
    return <div>
        <CustomNavbar />
        <Categories />
        <section>
          <Container fluid className="accessory-container">
            {this.props.accessory.length ?
              <React.Fragment>
                {this.props.accessory.map(item => (
                  <Card key={item.itemId} className="accessory-card">
                    <div>
                      <CardImg
                        src={item.image}
                        className="accessory-card-img"
                      />
                    </div>
                    <div>
                      <CardBody className="text-center accessory-card-body">
                        <div className="acc-card-body-title-area">
                          <h5>{item.name}</h5>
                        </div>
                        <div className="acc-card-body-description-area">
                          <p>
                            <small>{item.description}</small>
                          </p>
                        </div>
                        <div className="acc-card-body-price-area">
                          <h5>$ {item.price} USD</h5>
                        </div>
                      </CardBody>
                    </div>
                    <Form>
                      <div>
                        <Row className="accessory-qty-area">
                          <p className="mx-3 pt-2 pl-5">
                            <b>Quantity</b>
                          </p>
                          <select
                            className="accessory-qty-select"
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
                      <div className="accessory-btn-area">
                        <Button
                          onClick={this.onAddAccessoryToWish}
                          name="wishBtn"
                          id={item.itemId}
                          color="danger"
                          className="btn btn-sm accessory-card-wish-btn"
                        >
                          <i className="far fa-heart" /> Wish List
                        </Button>
                        <Button
                          onClick={this.onAddAccessoryToCart}
                          name="cartBtn"
                          id={item.itemId}
                          color="danger"
                          className="ml-2 btn btn-sm accessory-card-cart-btn"
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
      </div>;
  }
}

AccessoryPage.propTypes = {
  fetchAccessoryItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  accessory: state.accessory.accessoryItems,
  cart: state.cart.cartItems,
  wish: state.wish.wishItems
});

const mapDispatchToProps = {
  fetchAccessoryItems: fetchAccessoryItems,
  fetchWishItems: fetchWishItems,
  onAddAccessoryToCart: addAccessoryToCart,
  onAddAccessoryToWish: addAccessoryToWish
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccessoryPage);
