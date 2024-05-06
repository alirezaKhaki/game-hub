import { Card, Image, Heading, Badge } from "@chakra-ui/react";
import { IProduct } from "../../common/interface/Product/product.interface";

interface Props {
  product: IProduct;
}

const GameCard = ({ product }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
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
      <Heading size="5" textAlign="right">
        {product.title}
      </Heading>
    </Card>
  );
};

export default GameCard;
