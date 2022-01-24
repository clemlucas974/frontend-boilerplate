import { useMutation } from "react-query";
import { AxiosResponse } from "axios";

import { ApiService, CreateProductType } from "src/services/api/ApiService";
import { ApiError, CreateProductReturn } from "src/types";

const useCreateProduct = () => {
  const apiService = ApiService.createInstance();

  return useMutation<CreateProductReturn, ApiError, CreateProductType>(
    async (params) => {
      const response: AxiosResponse = await apiService.createProduct(params);
      return response.data;
    }
  );
};

export default useCreateProduct;
