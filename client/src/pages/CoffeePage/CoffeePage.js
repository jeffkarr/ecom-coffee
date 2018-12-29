import React, { Component } from "react";
import { Container } from "reactstrap";
import {
  Card,
  CardImg,
  CardDeck,
  CardBody
} from "reactstrap";

import coffeeJson from "../../assets/data/coffeeItems.json";
import "./CoffeePage.css";

class CoffeePage extends Component {

  render() {
    let coffeeItemArray = coffeeJson;

    return (
      <section>
        <Container fluid>
            {coffeeItemArray.coffeeItems.length > 0 ? (
              <CardDeck className="mt-5">
                {coffeeItemArray.coffeeItems.map(item => (
                  <Card>
                    <CardImg src={item.image} />
                    <CardBody>
                      <p>{item.name}</p>
                      <p>{item.price}</p>
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
