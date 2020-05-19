import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import ShopProvider from "../context/shopContext";
import HomePage from "../pages/HomePage";
import ProductPage from "./../pages/ProductPage";
import NavBar from "./NavBar/NavBar";
import withStyles from "@material-ui/core/styles/withStyles";
import Cart from "./Cart";

const styles = (theme) => ({
  appBarSpacer: theme.mixins.toolbar,
});

function App(props) {
  const { classes } = props;
 
  return (
    <ShopProvider>
      <Router>
        <NavBar/>
        <div className={classes.appBarSpacer} />
        <Cart />
        <Switch>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </ShopProvider>
  );
}
export default withStyles(styles)(App);
