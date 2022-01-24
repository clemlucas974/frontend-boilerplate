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
  success: false;
};

export type ApiError = {
  code: number;
  errorMessage: string;
  success: false;
  error: any;
  data: null;
};
