import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Color Mode</Text>
    </HStack>
  );
};

export default ColorMode