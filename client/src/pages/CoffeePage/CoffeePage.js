import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
import { Card, CardImg, CardDeck, CardBody, Button } from "reactstrap";
import PropTypes from "prop-types";
import { fetchCoffeeItems, addCoffeeToCart } from "../../actions/coffeeActions";

import "./CoffeePage.css";

class CoffeePage extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.addToWishList = this.addToWishList.bind(this);

    this.props.fetchCoffeeItems();
  };

  addToWishList(event) {
    console.log(event.target);
    alert("item " + event.target.id);
  };
  addToCart(event) {
    let cartCoffeeItemId = event.target.id;
    this.props.addCoffeeToCart(cartCoffeeItemId);
  };

  render() {
    return (
      <section>
        <Container fluid>
          {this.props.coffeeItemsArray.length ? (
            <CardDeck className="mt-5">
              {this.props.coffeeItemsArray.map(item => (
                <Card key={item.id}>
                  <CardImg src={item.image} />
                  <CardBody className="text-center">
                    <Row>
                      <div className="item-name">
                        <p>{item.name}</p>
                      </div>
                    </Row>
                    <Row>
                      <p>{item.price}</p>
                    </Row>
                    <Button
                      onClick={this.addToWishList}
                      id={item.id}
                      color="danger"
                      className="btn btn-sm"
                    >
                      <i className="far fa-heart" /> Wish List
                    </Button>
                    <Button
                      onClick={this.addToCart}
                      id={item.id}
                      color="danger"
                      className="m-2 btn btn-sm"
                    >
                      <i className="fas fa-cart-plus mr-1" />
                      Add to Cart
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </CardDeck>
          ) : (
            <div>
              <p> No items to display.</p>
            </div>
          )}
        </Container>
      </section>
    );
  }
}

CoffeePage.propTypes = {
  fetchCoffeeItems: PropTypes.func.isRequired,
  coffeeItemsArray: PropTypes.array.isRequired,
  addCoffeeToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  coffeeItemsArray: state.coffeeItemsArray.coffeeItems
});

export default connect(
  mapStateToProps,
  { fetchCoffeeItems, addCoffeeToCart }
)(CoffeePage);
