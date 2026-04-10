import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatform from "./hooks/usePlatform";
import type { Platform } from "./hooks/usePlatform";

interface Props {
  setSelectPlatform: (platform: Platform) => void;
}

const PlatformSelected = ({ setSelectPlatform }: Props) => {
  const { data, error, isLoading } = usePlatform();

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Platform
          <BsChevronBarDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                key={platform.id}
                value="slug"
                onClick={() => setSelectPlatform(platform)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelected;
