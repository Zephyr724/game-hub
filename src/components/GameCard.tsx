import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "./hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "@/services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root>
      <Image src={getCroppedImage(game.background_image)}></Image>

      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
}

export default GameCard;
