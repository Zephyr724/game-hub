"use client";

import { HStack, Switch } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root
        checked={colorMode == "dark"}
        colorPalette="green"
        onChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label whiteSpace="nowrap">Dark mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
}

export default ColorModeSwitch;
