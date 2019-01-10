import React, { Component } from "react";
import { Link } from "react-router-dom";
import CustomNavbar from "../../components/CustomNavbar";
import Categories from "../../components/Categories";
import { Container } from "reactstrap";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardDeck,
  CardBody
} from "reactstrap";

import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <CustomNavbar />
        <Categories />
        <section>
          <Container fluid>
            <CardDeck className="mt-5">
              <Card>
                <CardImg
                  src={require("../../assets/images/coffee-category-image.jpg")}
                  id="coffee-category-img"
                />
                <CardBody>
                  <CardTitle className="text-center">
                    Coffee Collections
                    <Link to="/coffees/">
                      <Button className="ml-3" color="danger">
                        Shop Now !
                      </Button>
                    </Link>
                  </CardTitle>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  src={require("../../assets/images/tea-category-image.jpg")}
                  id="tea-category-img"
                />
                <CardBody>
                  <CardTitle className="text-center">
                    Tea Collections
                    <Link to="/teas/">
                      <Button className="ml-3" color="danger">
                        Shop Now !
                      </Button>
                    </Link>
                  </CardTitle>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  src={require("../../assets/images/accessories-category-image.jpg")}
                  className="homepage-img"
                  id="accessories-category-img"
                />
                <CardBody>
                  <CardTitle className="text-center">
                    Accessories
                    <Link to="/accessories/">
                      <Button className="ml-3" color="danger">
                        Shop Now !
                      </Button>
                    </Link>
                  </CardTitle>
                </CardBody>
              </Card>
            </CardDeck>
          </Container>
        </section>
      </div>
    );
  }
}

export default HomePage;
