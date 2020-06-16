import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import ShopProvider from "../context/shopContext";
import HomePage from "../pages/HomePage";
import ProductPage from "./../pages/ProductPage";
import NavBar from "./NavBar/NavBar";
import withStyles from "@material-ui/core/styles/withStyles";
import Cart from "./Cart";
import Colorbar from "./Colorbar";

const styles = (theme) => ({
  // appBarSpacer: {
  //   height: "50px",
  // },
});

function App(props) {
  const [palette, setPalette] = useState({
    primary: {
      light: "#546e7a",
      main: "#102027",
      dark: "#000a12",
    },
    secondary: {
      light: "#ff8a50",
      main: "#ff5722",
      dark: "#870000",
    },
  });

  const handleChangeTheme = (theme) => {
    setPalette(theme);
    console.log(theme, "test");
  };

  let theme = createMuiTheme({ palette });
  console.log(theme.palette.primary);
  const { classes } = props;
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

        <Colorbar theme={theme} onChange={handleChangeTheme} />
      </ShopProvider>
    </ThemeProvider>
  );
}
export default withStyles(styles)(App);
