import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchCoffeeItems } from "../../actions/coffeeActions";
import { addToCart } from "../../actions/cartActions";

import CustomNavbar from "../../components/CustomNavbar";
import Categories from "../../components/Categories";
import { Container } from "reactstrap";

import { Card, CardImg, CardBody, Button } from "reactstrap";
import {
  Row,
  Input,
  Form
} from "reactstrap";
//import Clearfix from "../../components/Clearfix";
//import Wrapper from "../../components/Wrapper";
//import Card from "../../components/Card";
//import Spinner from "../../components/Spinner";

import "./CoffeePage.css";

class CoffeePage extends Component {
  constructor(props) {
    super(props);
    this.onAddToCart = this.onAddToCart.bind(this);
    this.addToWishList = this.addToWishList.bind(this);

    this.props.fetchCoffeeItems();
   }


  

  onAddToCart(event) {
    event.preventDefault(event);
    
    let cartCoffeeItemId = event.target.cartBtn.id;
    let cartCoffeeItemQty = event.target.coffeeQty.value;
    let newCartItem = {};
   
    for (let i = 0; i < this.props.coffee.length; i++) {
      if (this.props.coffee[i].itemId === cartCoffeeItemId) {
        let cartId = Math.floor(Math.random() * 1000) + 1; 
        newCartItem = {
          cartId: cartId,
          itemId: this.props.coffee[i].itemId,
          category: this.props.coffee[i].category,
          name: this.props.coffee[i].name,
          price: this.props.coffee[i].price,
          description: this.props.coffee[i].description,
          image: this.props.coffee[i].image,
          quantity: cartCoffeeItemQty
        };
        break;
      }
    }
    this.props.addToCart(newCartItem);
  }

  addToWishList(event) {
    console.log(event.target);
    alert("item " + event.target.id);
  }

  render() {
    return (
      <div>
        <CustomNavbar />
        <Categories />
        <section>
          <Container fluid className="coffee-container">
            {this.props.coffee.length ? (
              <React.Fragment>
                {this.props.coffee.map(item => (
                  <Card key={item.itemId} className="coffee-card">
                    <div>
                      <CardImg src={item.image} className="coffee-card-img" />
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
                    <Form onSubmit={this.onAddToCart}>
                    <div>
                      <Row className="coffee-qty-area">
                        <p className="ml-5 pt-2 pl-5"><b>Quantity</b></p>
                        <Input
                          type="select"
                          name="coffeeQty"
                          id="coffee-qty"
                          coffee-qty="coffee-qty"
                          placeholder="1"
                          className="ml-2"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </Row>
                    </div>
                    <div className="coffee-btn-area">
                      <Button
                        onClick={this.addToWishList}
                        name="wishBtn"
                        id={item.itemId}
                        color="danger"
                        className="btn btn-sm coffee-card-wish-btn"
                      >
                        <i className="far fa-heart" /> Wish List
                      </Button>
                      <Button
                        type="submit"
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
              </React.Fragment>
            ) : (
              <div>
                <p> No items to display.</p>
              </div>
            )}
          </Container>
        </section>
      </div>
    );
  }
}

CoffeePage.propTypes = {
  fetchCoffeeItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  coffee: state.coffee.coffeeItems,
  cart: state.cart.cartItems
});

export default connect(
  mapStateToProps,
  { fetchCoffeeItems, addToCart }
)(CoffeePage);
