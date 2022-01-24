import React, {
  FC,
  FormEventHandler,
  useState,
  ChangeEventHandler,
} from "react";
import { Container, TextField, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useCreateProduct } from "src/services/api/react-query/mutations/useCreateProduct";
import ROUTES from "src/routes/constants";
import type { CreateProductType } from "src/services/api/ApiService";

const ProductCreate: FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<Partial<CreateProductType>>({});
  const createProductMutation = useCreateProduct();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    const { title, subtitle, description, image_url } = state;

    event.preventDefault();

    if (title && subtitle && description && image_url) {
      const result = await createProductMutation.mutateAsync({
        title,
        subtitle,
        description,
        image_url,
      });

      if (result.success) {
        navigate(ROUTES.LIST_PRODUCT);
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

  return (
    <Container sx={{ py: 8 }}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            onChange={handleTitleChange}
          />
          <TextField
            required
            id="subtitle"
            name="subtitle"
            label="Subtitle"
            onChange={handleSubtitleChange}
          />
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            onChange={handleDescriptionChange}
          />
          <TextField
            required
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

export default ProductCreate;
