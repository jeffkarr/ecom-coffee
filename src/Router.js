import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoffeePage from "./pages/CoffeePage";
import TeaPage from "./pages/TeaPage";
import AccessoryPage from "./pages/AccessoryPage";
import DealPage from "./pages/DealPage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/coffees/" component={CoffeePage} />
    <Route exact path="/teas/" component={TeaPage} />
    <Route exact path="/accessories/" component={AccessoryPage} />
    <Route exact path="/deals/" component={DealPage} />
  </Switch>
);

export default Router;
