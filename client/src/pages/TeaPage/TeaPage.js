import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container, Row, Form } from "reactstrap";
import { Card, CardImg, CardBody, Button } from "reactstrap";
import CustomNavbar from "../../components/CustomNavbar";
import Categories from "../../components/Categories";

import { fetchTeaItems } from "../../actions/teaActions";
import { fetchWishItems } from "../../actions/wishActions";
import { addToCart } from "../../actions/cartActions";
import { addTeaToWish } from "../../actions/wishActions";

import "./TeaPage.css";

class TeaPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teaQty: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.onAddToCart = this.onAddToCart.bind(this);
    this.onAddTeaToWish = this.onAddTeaToWish.bind(this);

    this.props.fetchTeaItems();
  }

  handleChange(event) {
    event.preventDefault(event);
    this.setState({ teaQty: event.target.value });
  }

  onAddToCart(event) {
    event.preventDefault(event);
    let cartTeaItemId = event.target.id;
    let cartTeaItemQty = this.state.teaQty;
    let tempCartItem = this.props.tea.filter(
      teaItem => teaItem.itemId === cartTeaItemId
    );
    let cartId = Math.floor(Math.random() * 1000) + 1;
    let newCartItem = {
      cartId: cartId,
      itemId: tempCartItem[0].itemId,
      category: tempCartItem[0].category,
      name: tempCartItem[0].name,
      price: tempCartItem[0].price,
      description: tempCartItem[0].description,
      image: tempCartItem[0].image,
      quantity: cartTeaItemQty
    };
    this.props.onAddToCart(newCartItem);
    this.setState({
      teaQty: 1
    });
  }

  onAddTeaToWish(event) {
    event.preventDefault(event);
    let wishTeaItemId = event.target.id;
    let wishTeaItemQty = this.state.teaQty;
    let tempWishItem = this.props.tea.filter(
      teaItem => teaItem.itemId === wishTeaItemId
    );
    let wishId = Math.floor(Math.random() * 1000) + 1;
    let newWishItem = {
      wishId: wishId,
      itemId: tempWishItem[0].itemId,
      category: tempWishItem[0].category,
      name: tempWishItem[0].name,
      price: tempWishItem[0].price,
      description: tempWishItem[0].description,
      image: tempWishItem[0].image,
      quantity: wishTeaItemQty
    };
    this.props.onAddTeaToWish(newWishItem);
    this.setState({
      teaQty: 1
    });
  }

  render() {
    return (
      <div>
        <CustomNavbar />
        <Categories />
        <section>
          <Container fluid className="tea-container">
            {this.props.tea.length ?
              <React.Fragment>
                {this.props.tea.map(item => (
                  <Card key={item.itemId} className="tea-card">
                    <div>
                      <CardImg
                        src={item.image}
                        className="tea-card-img"
                      />
                    </div>
                    <div>
                      <CardBody className="text-center tea-card-body">
                        <div className="tea-card-body-title-area">
                          <h5>{item.name}</h5>
                        </div>
                        <div className="tea-card-body-description-area">
                          <p>
                            <small>{item.description}</small>
                          </p>
                        </div>
                        <div className="tea-card-body-price-area">
                          <h5>$ {item.price} USD</h5>
                        </div>
                      </CardBody>
                    </div>
                    <Form>
                      <div>
                        <Row className="tea-qty-area">
                          <p className="mx-3 pt-2 pl-5">
                            <b>Quantity</b>
                          </p>
                          <select
                            className="tea-qty-select"
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
                      <div className="tea-btn-area">
                        <Button
                          onClick={this.onAddTeaToWish}
                          name="wishBtn"
                          id={item.itemId}
                          color="danger"
                          className="btn btn-sm tea-card-wish-btn"
                        >
                          <i className="far fa-heart" /> Wish List
                      </Button>
                        <Button
                          onClick={this.onAddToCart}
                          name="cartBtn"
                          id={item.itemId}
                          color="danger"
                          className="ml-2 btn btn-sm tea-card-cart-btn"
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

TeaPage.propTypes = {
  fetchTeaItems: PropTypes.func.isRequired,
  fetchWishItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tea: state.tea.teaItems,
  cart: state.cart.cartItems,
  wish: state.wish.wishItems
});

const mapDispatchToProps = {
  fetchTeaItems: fetchTeaItems,
  fetchWishItems: fetchWishItems,
  onAddToCart: addToCart,
  onAddTeaToWish: addTeaToWish
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeaPage);
