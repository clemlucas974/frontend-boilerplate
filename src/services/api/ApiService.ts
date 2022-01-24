import axios, { AxiosRequestConfig } from "axios";
import UrlJoin from "url-join";

import type { Product } from "src/types";
import { apiClient } from "./client";

const API_ROUTES = {
  PRODUCT: "/api/products",
};

export type CreateProductType = Pick<
  Product,
  "title" | "description" | "image_url" | "subtitle"
>;

export type UpdateProductType = {
  id: Product["id"];
  product: Partial<
    Pick<Product, "title" | "description" | "image_url" | "subtitle">
  >;
};
export class ApiService {
  config: AxiosRequestConfig = {};

  private cancellationToken = axios.CancelToken.source();

  static createInstance(): ApiService {
    const activeInstance = new ApiService();
    activeInstance.cancellationToken = axios.CancelToken.source();
    activeInstance.config.cancelToken = activeInstance.cancellationToken.token;

    return activeInstance;
  }

  cancelRequests() {
    this.cancellationToken.cancel("RequestCancellation");
    return ApiService.createInstance();
  }

  /**
   * Fetch products with pagination
   * Query params:
   *  - page: number
   *  - size: number
   */
  getPaginatedProducts = (page: number, size: number) => {
    return apiClient.get(API_ROUTES.PRODUCT, { params: { page, size } });
  };

  getProductById = (id: Product["id"]) => {
    return apiClient.get(UrlJoin(API_ROUTES.PRODUCT, id.toString(10)));
  };

  createProduct = (product: CreateProductType) => {
    return apiClient.put(API_ROUTES.PRODUCT, product);
  };

  updateProduct = (params: UpdateProductType) => {
    return apiClient.post(
      UrlJoin(API_ROUTES.PRODUCT, `${params.id}`),
      params.product
    );
  };

  deleteProduct = (id: Product["id"]) => {
    return apiClient.delete(UrlJoin(API_ROUTES.PRODUCT, `${id}`));
  };
}
