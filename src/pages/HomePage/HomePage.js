import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardDeck,
  CardBody,
} from "reactstrap";

import "./HomePage.css";

class HomePage extends Component {

  render() {
    return <section>
        <Container fluid>
          <CardDeck className="mt-5">
            <Card>
              <CardImg src={require("../../assets/images/coffee-category-image.jpg")} />
              <CardBody>
                <CardTitle className="text-center">
                  Coffee Collections
                  <Link to="/coffees/">
                    <Button className="ml-3" color="danger">Shop Now !
                    </Button>
                  </Link>
                </CardTitle>
              </CardBody>
            </Card>
            <Card>
            <CardImg src={require("../../assets/images/tea-category-image.jpg")} />
              <CardBody>
                <CardTitle className="text-center">
                  Tea Collections
                  <Link to="/teas/">
                    <Button className="ml-3" color="danger">Shop Now !
                    </Button>
                  </Link>
                </CardTitle>
              </CardBody>
            </Card>
            <Card>
            <CardImg src={require("../../assets/images/accessories-category-image.jpg")} />
              <CardBody>
                <CardTitle className="text-center">
                  Accessories
                  <Link to="/accessories/">
                    <Button className="ml-3" color="danger">Shop Now !
                    </Button>
                  </Link>
                </CardTitle>
              </CardBody>
            </Card>
          </CardDeck>
        </Container>
      </section>;
  }
}

export default HomePage;
