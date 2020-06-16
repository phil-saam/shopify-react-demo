import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import ProductHero from "../components/ProductHero";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  media: {
    height: 450,
    backgroundPosition: "bottom center",
  },
}));

const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);
  const classes = useStyles();

  if (!products) return <CircularProgress color="secondary" />;
  return (
    <React.Fragment>
      <ProductHero />
      <Box my={5}>
        <Container>
          <Grid container spacing={1} alignItems="center" justify="center">
            {products.map((product) => (
              <Grid key={product.id} xs={12} sm={6} md={4}>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={product.images[0].src}
                        title={product.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.title}
                        </Typography>
                        <Typography>${product.variants[0].price}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default HomePage;
