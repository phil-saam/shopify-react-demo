import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {
  Typography,
  Box,
  Button,
  Grid,
  Container,
  CardMedia,
  Menu,
  MenuItem,
  CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: {
    height: "50px",
  },
  media: {
    height: 850,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  thumbnail: {
    height: 200,
    backgroundSize: "cover",
    cursor: "pointer",
    "&:active": { border: "1px solid green" },
  },
}));

const selected = { border: "1px solid green" };

const ProductPage = () => {
  const classes = useStyles();
  let { id } = useParams();
  const {
    fetchProductWithId,
    addItemToCheckout,
    product,
    openCart,
  } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId(id);
    return () => {};
  }, [fetchProductWithId, id]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedProdIndex, setSelectedProdIndex] = React.useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleVariantSelect = (e) => {
    setSelectedProdIndex(e);
    setAnchorEl(null);
  };

  const handleImage = (e) => {
    setSelectedImageIndex(e);
  };
  if (!product.title) return <CircularProgress color="secondary" />;

  return (
    <Box my={10}>
      <div className={classes.appBarSpacer} />
      <Container>
        <Grid container spacing="3">
          <Grid item xs={12} sm={8}>
            <CardMedia
              className={classes.media}
              image={product.images[selectedImageIndex].src}
              title={product.title}
            />
            <Box my={2}>
              <Grid container spacing="3">
                {product.images.map((image, i) => (
                  <Grid item xs={6} sm={3} key={image.id}>
                    <CardMedia
                      onClick={() => handleImage(i)}
                      className={classes.thumbnail}
                      image={image.src}
                      title={product.title}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h2" color="primary">
              {product.title}
            </Typography>
            <Typography variant="p" color="primary" gutterBottom>
              Description: {product.description}
            </Typography>
            <Typography variant="h6" color="primary">
              ${product.variants[selectedProdIndex].price}
            </Typography>
            <Button
              aria-controls="variant-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
            >
              {product.variants[selectedProdIndex].title}
            </Button>
            <Menu
              id="variant-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <Typography component={MenuItem}>Color/Size</Typography>
              {product.variants.map((variant, i) => (
                <MenuItem
                  key={i}
                  data-index={i}
                  onClick={() => handleVariantSelect(i)}
                >
                  {variant.title}
                </MenuItem>
              ))}
            </Menu>
            <Box component="span" display="block" my={3}>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  addItemToCheckout(product.variants[selectedProdIndex].id, 1);
                  openCart();
                }}
                startIcon={<AddShoppingCartIcon />}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductPage;
