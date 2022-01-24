import React, { FC } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";

import { useGetProducts } from "src/services/api/react-query/queries/product/useGetProducts";
import ROUTES from "src/routes/constants";
import ProductCard from "src/components/ProductCard";

const Products: FC = () => {
  const { isLoading, isFetching, data } = useGetProducts();

  return (
    <Container sx={{ py: 8 }}>
      <Link to={ROUTES.CREATE_PRODUCT}>
        <Button sx={{ my: 2 }} variant="outlined">
          Add product
        </Button>
      </Link>
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
              <ProductCard {...product} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Products;
