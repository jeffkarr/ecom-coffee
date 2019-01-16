import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { Container, Col } from "reactstrap";
import { Button } from "reactstrap";
import { Navbar } from "reactstrap";
import { Table } from "reactstrap";
import CustomNavbar from "../../components/CustomNavbar";
import Categories from "../../components/Categories";

import { sendOrder, removeWishItem } from "../../actions/wishActions";
import * as wishToCartActions from "../../actions/cartActionCreators";
import { getWishItems, getWishToCartItem } from "../../reducers";

import "./WishPage.css";

class WishPage extends Component {
  constructor(props) {
    super(props);
    this.onSendOrder = this.onSendOrder.bind(this);
    this.onRemoveWishItem = this.onRemoveWishItem.bind(this);
    this.onAddWishItemToCart = this.onAddWishItemToCart.bind(this);
  }

  onSendOrder() {
    alert("Thank you for your order !");
    this.props.onSendOrder();
  };

  onRemoveWishItem(event) {
    event.preventDefault();
    let removeWishId = event.target.id;
       this.props.onRemoveWishItem(removeWishId);
  };

  onAddWishItemToCart(event) {
    event.preventDefault();
    let wishId = event.target.id;
    let wishToCartItem = getWishItemById(wishId, this.props.wishItemsList);
    let newCartItemFromWish = buildNewCartItem(wishToCartItem);
    this.props.wishToCartActions.addWishToCart(newCartItemFromWish, wishId)
  };

  render() {
    return <div>
        <CustomNavbar />
        <Categories />
        <section>
          <Container>
            <Navbar color="light" light id="wishlistNav">
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <h2 id="wishlist">Your Wish List</h2>
              </Col>
            </Navbar>
          </Container>
          <Container className="wishlist-container">
            <Table className="wishlist-table table-responsive-md">
              {!this.props.wishItemsList.length ? <tbody /> : <thead>
                  <tr className="text-center">
                    <th />
                    <th />
                    <th />
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Item Price ($)</th>
                    <th>Cost ($)</th>
                  </tr>
                </thead>}
              {!this.props.wishItemsList.length ? 
                <tbody className="text-center">
                  <tr>
                    <td className="pt-4">
                      <h5>No items on wish list.</h5>
                    </td>
                  </tr>
                </tbody> : <tbody>
                  {this.props.wishItemsList.map(item => {
                    return (
                      <tr className="text-center" key={item.wishId}>
                        <td className="text-center align-middle">
                          <div className="add-wish-item-to-cart-div" />
                          <Button 
                            size="sm" data-toggle="tooltip" 
                            data-placement="top" 
                            title="Add Item to Cart" 
                            id={item.wishId} 
                            className="add-wish-to-cart-btn" 
                            onClick={this.onAddWishItemToCart}
                          >
                            <i className="fas fa-cart-plus" id={item.wishId} />
                          </Button>
                        </td>
                        <td className="text-center align-middle">
                          <div className="wish-item-trash-div" />
                          <Button 
                            size="sm" data-toggle="tooltip" 
                            data-placement="top" 
                            title="Remove Item" 
                            id={item.wishId} 
                            className="remove-wish-item-btn" 
                            onClick={this.onRemoveWishItem}
                          >
                            <i className="fas fa-trash" id={item.wishId} />
                          </Button>
                        </td>
                        <td>
                          <img src={item.image} alt="wish-item" className="wish-item-img" />
                        </td>
                        <td>
                          <p>{item.name}</p>
                        </td>
                        <td className="text-center">
                          <p>{item.quantity}</p>
                        </td>
                        <td className="text-center">
                          <p>{item.price}</p>
                        </td>
                        <td className="text-center">
                          <p>{(item.quantity * item.price).toFixed(2)}</p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>}
            </Table>
          </Container>
        </section>
      </div>;
  }
}

WishPage.propTypes = {
  onSendOrder: PropTypes.func.isRequired
};

function getWishItemById(wishId, wishItems) {
  let wishItem = wishItems.filter(wishTrxn => wishTrxn.wishId === parseInt(wishId));
  return wishItem;
};

function buildNewCartItem(wishToCartItem) {
  let cartId = Math.floor(Math.random() * 1000) + 1;
  let newCartItem = {
    cartId: cartId,
    itemId: wishToCartItem[0].itemId,
    category: wishToCartItem[0].category,
    name: wishToCartItem[0].name,
    price: wishToCartItem[0].price,
    description: wishToCartItem[0].description,
    image: wishToCartItem[0].image,
    quantity: wishToCartItem[0].quantity
  };
  return newCartItem;
}

// assigns what information from the store that you want available in this component.
// the key is the new prop name and the value is the name of the reducer function.
const mapStateToProps = state => ({
  wishItemsList: getWishItems(state),
  wishToCartItem: getWishToCartItem(state),
});

// defines what actions we want to expose to our component as a prop.
// can either be a function or an object.
// the key is a prop that maps to a value that is the action creator.   
function mapDispatchToProps(dispatch) {
  return {
    onSendOrder: sendOrder,
    onRemoveWishItem: (removeWishId) => {dispatch(removeWishItem(removeWishId))},
    wishToCartActions: bindActionCreators(wishToCartActions, dispatch)
  };  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishPage);
