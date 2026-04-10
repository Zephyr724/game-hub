import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Game } from "./hooks/useGames";

interface Props {
  genreSlug: string;
}
const GameGrid = ({ genreSlug }: Props) => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  let showData: Game[];

  if (genreSlug) {
    console.log(genreSlug);
    console.log(data);

    showData = data.filter((game) => game.genres[0].slug === genreSlug);
    console.log(showData);
  } else {
    showData = data;
  }

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={3} padding={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {showData.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
