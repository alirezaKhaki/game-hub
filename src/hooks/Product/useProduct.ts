import { AxiosError, CanceledError } from "axios";
import { useState, useEffect } from "react";
import { DefaultProductFilter } from "../../common/const/Product/product-filter.const";
import { IPaginated } from "../../common/interface/Pagination/pagination.interface";
import { IProduct } from "../../common/interface/Product/product.interface";
import ProductService from "../../services/ProductService/ProductService";

const useProduct = () => {
  const [products, setProducts] = useState<IPaginated<IProduct>>();
  const [error, setError] = useState("");
  useEffect(() => {
    const { res, cancle } = ProductService.productList(DefaultProductFilter);
    res
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data.data);
      })
      .catch((e: AxiosError) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
      });

    return () => cancle();
  }, []);

  return { products, error };
};

export default useProduct;
