import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CustomNavbar from "../../components/CustomNavbar";
import Categories from "../../components/Categories";
import { Container } from "reactstrap";
import { Card, CardImg, CardBody, Button } from "reactstrap";
import { Row, Form } from "reactstrap";

import { fetchCoffeeItems } from "../../actions/coffeeActions";
import { fetchWishItems } from "../../actions/wishActions";
import { addToCart } from "../../actions/cartActions";
import { addToWishList } from "../../actions/wishActions";

import "./CoffeePage.css";

class CoffeePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coffeeQty: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.onAddToCart = this.onAddToCart.bind(this);
    this.onAddToWishList = this.onAddToWishList.bind(this);
 
    this.props.fetchCoffeeItems();
  }
 
  handleChange(event) {
    this.setState({ coffeeQty: event.target.value });
  }
 
  onAddToCart(event) {
    event.preventDefault(event);
    let cartCoffeeItemId = event.target.id;
    let cartCoffeeItemQty = this.state.coffeeQty;
    let tempCartItem = this.props.coffee.filter(coffeeItem => coffeeItem.itemId === cartCoffeeItemId);
    let cartId = Math.floor(Math.random() * 1000) + 1;
    let newCartItem = {
      cartId: cartId,
      itemId: tempCartItem[0].itemId,
      category: tempCartItem[0].category,
      name: tempCartItem[0].name,
      price: tempCartItem[0].price,
      description: tempCartItem[0].description,
      image: tempCartItem[0].image,
      quantity: cartCoffeeItemQty
    };
    this.props.onAddToCart(newCartItem);
    this.setState({
      coffeeQty: 1
    });
  }

  onAddToWishList(event) {
    event.preventDefault(event);
    let wishCoffeeItemId = event.target.id;
    let wishCoffeeItemQty = this.state.coffeeQty;
    let tempWishItem = this.props.coffee.filter(coffeeItem => coffeeItem.itemId === wishCoffeeItemId);
    let wishId = Math.floor(Math.random() * 1000) + 1;
    let newWishItem = {
      wishId: wishId,
      itemId: tempWishItem[0].itemId,
      category: tempWishItem[0].category,
      name: tempWishItem[0].name,
      price: tempWishItem[0].price,
      description: tempWishItem[0].description,
      image: tempWishItem[0].image,
      quantity: wishCoffeeItemQty
    };
    this.props.onAddToWishList(newWishItem);
    this.setState({
      coffeeQty: 1
    });
  }

  render() {
    return <div>
      <CustomNavbar />
      <Categories />
      <section>
        <Container fluid className="coffee-container">
          {this.props.coffee.length ? 
            <React.Fragment>
              {this.props.coffee.map(item => (
                <Card key={item.itemId} className="coffee-card">
                  <div>
                    <CardImg
                      src={item.image}
                      className="coffee-card-img"
                    />
                  </div>
                  <div>
                    <CardBody className="text-center coffee-card-body">
                      <div className="card-body-title-area">
                        <h5>{item.name}</h5>
                      </div>
                      <div className="card-body-description-area">
                        <p>
                          <small>{item.description}</small>
                        </p>
                      </div>
                      <div className="card-body-price-area">
                        <h5>$ {item.price} USD</h5>
                      </div>
                    </CardBody>
                  </div>
                  <Form>
                    <div>
                      <Row className="coffee-qty-area">
                        <p className="mx-3 pt-2 pl-5">
                          <b>Quantity</b>
                        </p>
                        <select
                          className="coffee-qty-select"
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
                    <div className="coffee-btn-area">
                      <Button
                        onClick={this.onAddToWishList}
                        name="wishBtn"
                        id={item.itemId}
                        color="danger"
                        className="btn btn-sm coffee-card-wish-btn"
                      >
                        <i className="far fa-heart" /> Wish List
                      </Button>
                      <Button
                        onClick={this.onAddToCart}
                        name="cartBtn"
                        id={item.itemId}
                        color="danger"
                        className="ml-2 btn btn-sm coffee-card-cart-btn"
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

CoffeePage.propTypes = {
  fetchCoffeeItems: PropTypes.func.isRequired,
  fetchWishItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  coffee: state.coffee.coffeeItems,
  cart: state.cart.cartItems,
  wish: state.wish.wishItems
});

const mapDispatchToProps = {
  fetchCoffeeItems: fetchCoffeeItems,
  fetchWishItems: fetchWishItems,
  onAddToCart: addToCart,
  onAddToWishList: addToWishList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeePage);
