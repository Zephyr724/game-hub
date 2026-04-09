import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreListItemContainer = ({ children }: Props) => {
  return <Box paddingY="5px">{children}</Box>;
};

export default GenreListItemContainer;
