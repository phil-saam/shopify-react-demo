import React, { useContext } from "react";

import { ShopContext } from "../../context/shopContext";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import { Link } from "react-router-dom";
import { MenuItem, Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StorefrontIcon from "@material-ui/icons/Storefront";

const url = "https://www.longleafdesigns.com";

const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    margin: "10px",
    // paddingLeft: "16px",
    right: 0,
    position: "relative",
    background: "transparent",
  },
  rightLink: {
    fontSize: 13,
    color: theme.palette.common.white,
    marginRight: theme.spacing(3),
    collapse: { color: theme },
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppBarCollapse(props) {
  const { classes } = props;

  const { openCart } = useContext(ShopContext);

  return (
    <div className={classes.root}>
      <ButtonAppBarCollapse>
        <MenuItem
          href={url}
          color="inherit"
          variant="h6"
          className={classes.rightLink.collapse}
        >
          <Link href={url} style={{ textDecoration: "none" }}>
            Exit Demo
          </Link>
        </MenuItem>
        <MenuItem
          component={Link}
          to="/home"
          color="inherit"
          variant="h6"
          className={classes.rightLink.collapse}
        >
          <StorefrontIcon /> Store Front
        </MenuItem>
        <MenuItem
          component={Link}
          color="inherit"
          variant="h6"
          className={classes.rightLink.collapse}
          onClick={openCart}
        >
          <ShoppingCartIcon />
          Cart
        </MenuItem>
      </ButtonAppBarCollapse>
      <div className={props.classes.buttonBar} id="appbar-collapse">
        <Button
          color="inherit"
          variant="h6"
          className={classes.rightLink}
          href={url}
        >
          Exit Demo
        </Button>
        <Button
          component={Link}
          color="inherit"
          variant="h6"
          className={classes.rightLink}
          to="/home"
          startIcon={<StorefrontIcon />}
        >
          Store Front
        </Button>
        <Button
          component={Link}
          color="inherit"
          variant="h6"
          className={classes.rightLink}
          onClick={() => openCart()}
          startIcon={<ShoppingCartIcon />}
        >
          Cart
        </Button>
      </div>
    </div>
  );
}
export default withStyles(styles)(AppBarCollapse);
