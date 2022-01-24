import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

import type { Product } from "src/types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const PRODUCTS: Product[] = [1, 2, 3].map((i) => ({
  id: i,
  title: "Title" + i,
  subtitle: "subtitle",
  description: "This is a description",
  imageUrl:
    "https://static.popchef.com/v2/products/hxTZIWf1YHtbRtNwwl5Y4S_wMiQ.jpeg",
}));

const Products: FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {PRODUCTS.map((product, i) => {
          return (
            <Grid item key={`product-${product.id}`} xs={12} md={6}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 250, display: { xs: "none", sm: "block" } }}
                  image={product.imageUrl}
                  alt={product.title}
                />
                <Box
                  sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="h2" variant="h5">
                      {product.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {product.subtitle}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {product.description}
                    </Typography>
                  </CardContent>
                  <Divider sx={{ mx: 2 }} />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      p: 2,
                    }}
                  >
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Products;
