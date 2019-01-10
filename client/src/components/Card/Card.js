import React from "react";
import { Button } from "reactstrap";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="card-img">
      <img alt={props.name} src={props.image} onClick={() => props.setClickedTrue(props.id)} />
    </div>
    <div className="card-body">
      <h5>{props.name}</h5>
      <p>{props.description}</p>
      <h5>${props.price}</h5>
    </div>
    <div>
      <row>
        <Button
          id={props.id}
          color="danger"
          className="btn btn-sm"
        >
          <i className="far fa-heart" /> Wish List
                    </Button>
        <Button
          onClick={props.addToCart}
          id={props.id}
          color="danger"
          className="m-2 btn btn-sm"
        >
          <i className="fas fa-cart-plus mr-1" />
          Add to Cart
                    </Button>
      </row>
    </div>

  </div>
);

export default Card;