import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQueary: GameQuery;
}

const GameHeading = ({ gameQueary }: Props) => {
  const heading = `${gameQueary.platform?.name || ""} ${gameQueary.genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;
