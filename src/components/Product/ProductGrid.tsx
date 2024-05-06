import { SimpleGrid } from "@chakra-ui/react";
import useProduct from "../../hooks/Product/useProduct";
import GameCard from "./ProductCard";

const ProductGrid = () => {
  const { products, error } = useProduct();

  if (error) return alert(error);

  return (
    <SimpleGrid columns={{ sm: 2, lg: 5 }} spacing={5} padding={5}>
      {products?.result.map((p) => {
        return <GameCard product={p} key={p.barcode} />;
      })}
    </SimpleGrid>
  );
};

export default ProductGrid;
