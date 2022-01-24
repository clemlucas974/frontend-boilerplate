import React, { FC, memo } from "react";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Product } from "src/types";
import { useDeleteProduct } from "src/services/api/react-query/mutations/useDeleteProduct";
import { useQueryClient } from "react-query";

type Props = Product;

const ProductCard: FC<Props> = ({
  id,
  title,
  subtitle,
  description,
  image_url,
}) => {
  const queryClient = useQueryClient();
  const deleteProductMutation = useDeleteProduct();

  const handleDelete = () => {
    deleteProductMutation.mutateAsync(id, {
      onSuccess: () => {
        queryClient.invalidateQueries("GetProducts");
      },
    });
  };

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 250, display: { xs: "none", sm: "block" } }}
        image={image_url}
        alt={title}
      />
      <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="h2" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {subtitle}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {description}
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
          <Button size="small" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default memo<Props>(ProductCard);
