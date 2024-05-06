import { useEffect, useState } from "react";
import { IPaginated } from "../../common/interface/pagination.interface";
import { IProduct } from "../../services/ProductService/interface/product.interface";
import apiClient from "../../services/api-client";
import { AxiosError } from "axios";

const ProductGrid = () => {
  const [products, setProducts] = useState<IPaginated<IProduct>>();

  useEffect(() => {
    apiClient
      .post<{ data: IPaginated<IProduct> }>(
        "product/list",
        {
          option: {
            page: {
              eq: 1,
            },
            sort: {
              eq: "banimodeCode",
            },
            limit: {
              eq: 10,
            },
          },
        },
        {
          headers: {
            platform: 3,
          },
        }
      )
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data.data);
      })
      .catch((e: AxiosError) => {
        alert(e.message);
      });
  }, []);

  return (
    <ul>

      {products?.result.map((p) => {
        return <li key={p.barcode}>barcode: {p.barcode}</li>;
      })}
    </ul>
  );
};

export default ProductGrid;
