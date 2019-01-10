import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Container } from "reactstrap";
//import {
//  Card,
//  Button,
//  CardImg,
//  CardTitle,
//  CardDeck,
//  CardBody
//} from "reactstrap";
import CustomNavbar from "../../components/CustomNavbar";
import Categories from "../../components/Categories";

import "./AccessoryPage.css";

class AccessoryPage extends Component {
  //  constructor(props) {
  //    super(props);
  //  }

  render() {
    return (
      <div>
        <CustomNavbar />
        <Categories />
        <section>
          <Container fluid>
            <h2>Accessory Page</h2>
          </Container>
        </section>
      </div>
    );
  }
}

export default AccessoryPage;
