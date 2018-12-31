import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { Card, CardImg, CardDeck, CardBody, Button } from "reactstrap";

import coffeeJson from "../../assets/data/coffeeItems.json";
import "./CoffeePage.css";

class CoffeePage extends Component {
  constructor() {
    super();
    let coffeeItemsArray = coffeeJson.coffeeItems;
    this.state = {
      coffeeItems: coffeeItemsArray
    };

// ----------------------------------------------------------    
//    console.log(
//        "this.state.coffeeItems is " +
//          JSON.stringify(this.state.coffeeItems, null, 2)
//    );
// ----------------------------------------------------------

  }
  addToWishList(event) {
    console.log(event.target);
    alert("item " + event.target.id);
  }; 
  addToCart(event) {
    console.log(event.target);
    alert("item " + event.target.id);
  }; 

  render() {
 
    return (
      <section>
        <Container fluid>
          {this.state.coffeeItems.length ? (
            <CardDeck className="mt-5">
              {this.state.coffeeItems.map(item => (
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
                    <Button onClick={this.addToWishList.bind(this)} id={item.id} color="danger" className="btn btn-sm">
                      <i className="far fa-heart" /> Wish List
                    </Button>
                    <Button onClick={this.addToCart.bind(this)} id={item.id} color="danger" className="m-2 btn btn-sm">
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

export default CoffeePage;
