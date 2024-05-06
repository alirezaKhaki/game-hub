import useProduct from "../../hooks/Product/useProduct";

const ProductGrid = () => {
  const { products, error } = useProduct();

  if (error) return alert(error);

  return (
    <ul>
      {products?.result.map((p) => {
        return <li key={p.barcode}>barcode: {p.barcode}</li>;
      })}
    </ul>
  );
};

export default ProductGrid;
