export type Product = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
};

export type GetProductsReturn = {
  code: number;
  data: {
    rows: Product[];
    currentPage: number;
    totalItems: number;
    totalPages: number;
  };
  success: boolean;
};

export type GetProductReturn = {
  code: number;
  data: Product;
  success: boolean;
};

export type CreateProductReturn = {
  code: number;
  data: Product;
  success: boolean;
};

export type UpdateProductReturn = {
  code: number;
  data: Product;
  success: boolean;
};

export type DeleteProductReturn = {
  code: number;
  success: boolean;
};

export type ApiError = {
  code: number;
  errorMessage: string;
  success: false;
  error: any;
  data: null;
};
