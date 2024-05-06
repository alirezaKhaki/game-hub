import {
  IPaginated,
  IPagination,
} from "../../common/interface/Pagination/pagination.interface";
import apiClient from "../api-client";
import { IProduct } from "../../common/interface/Product/product.interface";

class ProductService {
  productList(body: IPagination) {
    const controller = new AbortController();
    const res = apiClient.post<{ data: IPaginated<IProduct> }>(
      "product/list",
      body,
      {
        headers: {
          platform: 3,
        },
        signal: controller.signal,
      }
    );

    return { res, cancle: () => controller.abort() };
  }
}

export default new ProductService();
