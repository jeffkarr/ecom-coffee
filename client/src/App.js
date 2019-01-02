import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import PropTypes from "prop-types";
import CustomNavbar from "./components/CustomNavbar";
import Categories from "./components/Categories";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CoffeePage from "./pages/CoffeePage";
import TeaPage from "./pages/TeaPage";
import AccessoryPage from "./pages/AccessoryPage";
import DealPage from "./pages/DealPage";
import CartPage from "./pages/CartPage";
import WishPage from "./pages/WishPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <CustomNavbar />
            <Categories />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/coffees/" component={CoffeePage} />
              <Route exact path="/teas/" component={TeaPage} />
              <Route exact path="/accessories/" component={AccessoryPage} />
              <Route exact path="/deals/" component={DealPage} />
              <Route exact path="/cart/" component={CartPage} />
              <Route exact path="/wish/" component={WishPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

App.proptypes = {
  store: PropTypes.object.isRequired
}

export default App;
