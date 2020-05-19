import React, { useContext } from "react";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

const NavBar = () => {
  const { openCart } = useContext(ShopContext);

  return (
    <Container d="flex" flexDir="row" p="2rem" justify="space-between">
      <Link to="/">
        <Icon name="Store" size="20px" />
        <Text>Shop</Text>
      </Link>
      <Anchor onClick={() => openCart()}>Cart</Anchor>
    </Container>
  );
};

export default NavBar;
