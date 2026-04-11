import { Button, Portal } from "@chakra-ui/react";
import { Menu } from "@chakra-ui/react/menu";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {"Order by:Relevance"}
          <BsChevronBarDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="relevance">Relevance</Menu.Item>
            <Menu.Item value="dateadd">Date Add</Menu.Item>
            <Menu.Item value="name">Name</Menu.Item>
            <Menu.Item value="releasedate">Release date</Menu.Item>
            <Menu.Item value="popularity">Popularity</Menu.Item>
            <Menu.Item value="averagerating">Average rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
