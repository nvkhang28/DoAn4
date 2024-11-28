import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const categories = [
  { title: "Sneakers", image: "/images/category1.jpg" },
  { title: "Accessories", image: "/images/category2.jpg" },
  { title: "New Arrivals", image: "/images/category3.jpg" },
];

const bestSelling = [
  { title: "Classic Sneakers", price: "3000", image: "/images/shoe1.jpg" },
  { title: "Modern Kicks", price: "3500", image: "/images/shoe2.jpg" },
  { title: "Sport Sneakers", price: "4000", image: "/images/shoe3.jpg" },
];

const promotions = [
  { title: "Black Friday Sale - Up to 50% Off", image: "/images/sale1.jpg" },
  { title: "Buy 1 Get 1 Free", image: "/images/sale2.jpg" },
];

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box className="hero-section">
        <Typography variant="h3" className="hero-title">
          Discover the Best Deals Today!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/catalog")}
        >
          Shop Now
        </Button>
      </Box>

      {/* Introduction Section */}
      <Box className="intro-section">
        <Typography variant="h4">Welcome to RE-STORE</Typography>
        <Typography>
          Your one-stop destination for the latest sneakers and accessories.
        </Typography>
      </Box>

      {/* Best Selling Products */}
      <Box className="best-selling">
        <Typography variant="h4">Best Selling Products</Typography>
        <Grid container spacing={4}>
          {bestSelling.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="product-card">
                <CardMedia component="img" height="250" image={product.image} />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography>${product.price}</Typography>
                  <Button variant="outlined">Add to Cart</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Categories */}
      <Box className="categories">
        <Typography variant="h4">Shop by Categories</Typography>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box className="category-card">
                <img src={category.image} alt={category.title} />
                <Typography variant="h5">{category.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Sale & Promotion Banner */}
      <Box className="promotion-banner">
        <Grid container spacing={4}>
          {promotions.map((promo, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box className="promo-card">
                <img src={promo.image} alt={promo.title} />
                <Typography variant="h5">{promo.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
    </Container>
  );
};

export default Homepage;
