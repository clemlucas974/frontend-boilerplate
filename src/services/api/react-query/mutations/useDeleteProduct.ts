import { useMutation } from "react-query";
import { AxiosResponse } from "axios";

import { ApiService } from "src/services/api/ApiService";
import { ApiError, Product, DeleteProductReturn } from "src/types";

export const useDeleteProduct = () => {
  const apiService = ApiService.createInstance();

  return useMutation<DeleteProductReturn, ApiError, Product["id"]>(
    async (id) => {
      const response: AxiosResponse = await apiService.deleteProduct(id);
      return response.data;
    }
  );
};
