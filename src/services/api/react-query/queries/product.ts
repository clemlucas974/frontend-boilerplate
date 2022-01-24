import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { ApiService } from "src/services/api/ApiService";
import { ApiError, GetProductsReturn } from "src/types";

/**
 *
 * @returns Deals with my request details api
 * Caching handled by react query
 */
export const useGetProducts = () => {
  const apiService = ApiService.createInstance();

  return useQuery<GetProductsReturn, ApiError>(["GetProducts"], async () => {
    const response: AxiosResponse = await apiService.getPaginatedProducts(0, 5);
    return response.data;
  });
};
