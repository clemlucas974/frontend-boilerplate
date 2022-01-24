import { useMutation } from "react-query";
import { AxiosResponse } from "axios";

import { ApiService, UpdateProductType } from "src/services/api/ApiService";
import { ApiError, UpdateProductReturn } from "src/types";

const useUpdateProduct = () => {
  const apiService = ApiService.createInstance();

  return useMutation<UpdateProductReturn, ApiError, UpdateProductType>(
    async (params) => {
      const response: AxiosResponse = await apiService.updateProduct(params);
      return response.data;
    }
  );
};

export default useUpdateProduct;
