import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/react.svg";
import ColorMode from "../ColorMode/ColorMode";
const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10'>
      <Image src={logo} />
      <ColorMode />
    </HStack>
  );
};
export default NavBar;
