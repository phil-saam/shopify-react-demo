import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import ShopProvider from "../context/shopContext";
import HomePage from "../pages/HomePage";
import ProductPage from "./../pages/ProductPage";
import NavBar from "./NavBar/NavBar";
import withStyles from "@material-ui/core/styles/withStyles";
import Cart from "./Cart";
import Colorbar from "./Colorbar";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const styles = (theme) => ({
  appBarSpacer: theme.mixins.toolbar,
});

function App(props) {
  const { classes } = props;

  const [state, setState] = React.useState({
    primaryColor: "#004d40",
    secondaryColor: "#f57f17",
  });

  theme.palette.primary.main = state.primaryColor;
  theme.palette.secondary.main = state.secondaryColor;


  return (
    <ThemeProvider theme={theme}>
      <ShopProvider>
        <Router>
          <NavBar />
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
        <Colorbar
          primary={state.primaryColor}
          secondary={state.secondaryColor}
        />
      </ShopProvider>
    </ThemeProvider>
  );
}
export default withStyles(styles)(App);
