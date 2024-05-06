import { Card, Image, Heading } from "@chakra-ui/react";
import { IProduct } from "../../common/interface/Product/product.interface";

interface Props {
  product: IProduct;
}

const GameCard = ({ product }: Props) => {
  console.log(product.banimodeDetails.images.medium_default[0]);
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={product.banimodeDetails.images.large_default[0]} />
      <Heading size="5" textAlign="right">
        {product.title}
      </Heading>
    </Card>
  );
};

export default GameCard;
