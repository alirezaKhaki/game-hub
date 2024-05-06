import { Card, Image, Heading, Badge } from "@chakra-ui/react";
import { IProduct } from "../../common/interface/Product/product.interface";

interface Props {
  product: IProduct;
}

const GameCard = ({ product }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" textAlign="left">
      <Image src={product.banimodeDetails.images.large_default[0]} />
      {product.label && (
        <Badge
          textAlign="center"
          position="absolute"
          //   bottom={12} // Adjust bottom position as needed
          top={2} // Adjust bottom position as needed
          left="50%" // Set left to 50% to center horizontally
          transform="translateX(-50%)" // Move badge left by half of its width to center it
          colorScheme="black"
          fontSize="xs"
          borderRadius="md"
          px={7}
          py={1}
        >
          {product.label}
        </Badge>
      )}
      <p style={{ paddingLeft: 10 }}>
        {product.banimodeDetails.product_manufacturer_en_name}
      </p>
      <p style={{ paddingLeft: 10 }}>Price: {product.salePrice} Rials</p>
    </Card>
  );
};

export default GameCard;
