import React from "react";
import PropTypes from "prop-types";
import BackgroundImage from "../img/manHero.jpg";
import Logo from "../img/LongLeafLogo.png";

import { withStyles } from "@material-ui/core/styles";
import { Button, Typography, Box, Link } from "@material-ui/core";
import ProductHeroLayout from "./ProductHeroLayout";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundColor: "#233d49",
    backgroundPosition: "center bottom",
  },
  button: {
    minWidth: 200,
  },
  logo: { letterSpacing: "2px" },

  head: {
    display: "flex",
  },

  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  logoImage: {
    height: "100px",
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={BackgroundImage}
        alt="Low poly design hero"
      />
      <Box className={classes.head}>
        <Typography
          color="inherit"
          align="center"
          variant="h2"
          marked="center"
          classes={classes.logo}
        >
          Long leaf Demo Store
        </Typography>
      </Box>
      {/* 
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Store for demonstration purposes put taglines here!
      </Typography>

      <Button
        renderAs={Link}
        href="/contact"
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
      >
        Request a Quote
      </Button> */}
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
