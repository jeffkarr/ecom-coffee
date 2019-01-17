import React from "react";
import { Col, Row, Button } from "reactstrap";

import "./LandingPage.css";

const LandingPage = () => {
  return <div className="container-fluid landingPic">
      <Row className="landing-btn-row">
        <Col size="2">
          <Button size="lg" color="danger" id="landing-btn" href="/home/">
            Browse Products
          </Button>
        </Col>
      </Row>
    </div>;
};

export default LandingPage;
