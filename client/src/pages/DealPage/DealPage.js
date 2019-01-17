import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

import CustomNavbar from "../../components/CustomNavbar";
import Categories from "../../components/Categories";

import "./DealPage.css";

class DealPage extends Component {
  //  constructor(props) {
  //    super(props);
  //  }

  render() {
    return (
      <div>
        <CustomNavbar />
        <Categories />
        <section>
          <Container fluid className="text-center">
            <h2 className="mt-5">Deal Page</h2>
            <Container>
              <Row>
                <Col>
                  <p>This page is currently under construction.</p>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      </div>
    );
  }
}

export default DealPage;
