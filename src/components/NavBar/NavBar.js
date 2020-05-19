import React from "react";
import PropTypes from "prop-types";
import NavBarCollapse from "./NavBarCollapse";
import Logo from "../../img/LongLeafLogo.png";

// Mui
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { Box, Container } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
  },

  title: {
    flexGrow: 1,
  },
  logo: {
    height: "50px",
  },

  navigation: {},
  toggleDrawer: {},
  appTitle: {},

  appBarSpacer: theme.mixins.toolbar,
});

function NavBar(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Container>
        <AppBar position="fixed" className={classes.navigation}>
          <Toolbar>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
              href="/home"
            >
              <Box display="flex" alignItems="center">
                <Box p={1}>
                  <img src={Logo} className={classes.logo} alt="Logo" />
                </Box>
                <Box p={1}>{"Long Leaf Designs"}</Box>
              </Box>
            </Link>

            <NavBarCollapse />
          </Toolbar>
        </AppBar>
      </Container>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
