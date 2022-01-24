import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";

import { useGetProducts } from "src/services/api/react-query/queries/product";
import ROUTES from "src/routes/constants";

const Products: FC = () => {
  const { isLoading, isFetching, data } = useGetProducts();

  return (
    <Container sx={{ py: 8 }}>
      <Box>
        <Link to={ROUTES.CREATE_PRODUCT}>
          <Button>Add product</Button>
        </Link>
      </Box>
      <Grid container spacing={4}>
        {isLoading || isFetching ? (
          <Grid item xs={12} md={6}>
            <Skeleton variant="rectangular" width="100%" height="100%" />
          </Grid>
        ) : (
          <></>
        )}
        {(data?.data.rows || []).map((product) => {
          return (
            <Grid item key={`product-${product.id}`} xs={12} md={6}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 250, display: { xs: "none", sm: "block" } }}
                  image={product.image_url}
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
