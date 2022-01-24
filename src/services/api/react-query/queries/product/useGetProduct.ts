import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { ApiService } from "src/services/api/ApiService";
import { ApiError, GetProductReturn, Product } from "src/types";

export const useGetProduct = (id: Product["id"]) => {
  const apiService = ApiService.createInstance();

  return useQuery<GetProductReturn, ApiError>([`Product.${id}`], async () => {
    const response: AxiosResponse = await apiService.getProductById(id);
    return response.data;
  });
};
