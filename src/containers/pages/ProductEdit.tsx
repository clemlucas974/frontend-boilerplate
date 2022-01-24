import React, {
  FC,
  FormEventHandler,
  useState,
  ChangeEventHandler,
} from "react";
import { Container, TextField, Stack, Button, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";

import useUpdateProduct from "src/services/api/react-query/mutations/product/useUpdateProduct";
import ROUTES from "src/routes/constants";
import type { CreateProductType } from "src/services/api/ApiService";

const ProductEdit: FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState<Partial<CreateProductType>>({});
  const updateProductMutation = useUpdateProduct();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    const { title, subtitle, description, image_url } = state;

    event.preventDefault();

    if (params.id) {
      const result = await updateProductMutation.mutateAsync({
        id: parseInt(params.id, 10),
        product: {
          title,
          subtitle,
          description,
          image_url,
        },
      });

      if (result.success) {
        navigate(-1);
      }
    }
  };

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setState({
      ...state,
      title: event.currentTarget.value || "",
    });
  };
  const handleSubtitleChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setState({
      ...state,
      subtitle: event.currentTarget.value || "",
    });
  };
  const handleDescriptionChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setState({
      ...state,
      description: event.currentTarget.value || "",
    });
  };
  const handleImageUrlChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setState({
      ...state,
      image_url: event.currentTarget.value || "",
    });
  };

  // TODO: Use of formik or react-hook-form
  return (
    <Container sx={{ py: 8 }}>
      <Link to={ROUTES.LIST_PRODUCT}>
        <Button sx={{ my: 2 }} variant="outlined">
          Back
        </Button>
      </Link>
      <Typography
        component="h1"
        variant="h3"
      >{`Product ${params.id} - Edit`}</Typography>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            id="title"
            name="title"
            label="Title"
            onChange={handleTitleChange}
          />
          <TextField
            id="subtitle"
            name="subtitle"
            label="Subtitle"
            onChange={handleSubtitleChange}
          />
          <TextField
            id="description"
            name="description"
            label="Description"
            onChange={handleDescriptionChange}
          />
          <TextField
            id="image_url"
            name="image_url"
            label="URL image"
            onChange={handleImageUrlChange}
          />
          <Button
            sx={{ width: "fit-content", alignSelf: "center" }}
            variant="outlined"
            type="submit"
          >
            Create
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default ProductEdit;
