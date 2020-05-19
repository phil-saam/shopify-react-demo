import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Drawer, Box, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductTable from "./ProductTable";

const useStyles = makeStyles((theme) => ({
  root: {},
  drawer: {
    width: 300,
  },
}));

export default function Cart() {
  const {
    isCartOpen,
    closeCart,
    checkout,
    removeItemFromCheckout,
  } = useContext(ShopContext);
  const classes = useStyles();

  if (checkout.length === 0) return <Typography>Cart is Empty==</Typography>;
  return (
    <Drawer
      anchor="right"
      open={isCartOpen}
      onClose={closeCart}
      className={classes.drawer}
      width="20%"
    >
      <Box p={3}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">Your Cart</Typography>

            <ProductTable
              data={checkout.lineItems}
              deleteItem={removeItemFromCheckout}
            />

            <Button
              variant="contained"
              color="secondary"
              href={checkout.webUrl}
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
}
