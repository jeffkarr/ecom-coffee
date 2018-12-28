import React, { Component } from 'react';
//import Router from './Router';
import CustomNavbar from './components/CustomNavbar';
import Categories from './components/Categories';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CoffeePage from "./pages/CoffeePage";
import TeaPage from "./pages/TeaPage";
import AccessoryPage from "./pages/AccessoryPage";
import DealPage from "./pages/DealPage";

class App extends Component {
  render() {
    return (
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
          </Switch>
        </div>
      </Router> 
    );
  }
}

export default App;
