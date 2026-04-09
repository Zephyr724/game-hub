import { Card, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import type { Game } from "./hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "@/services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={getCroppedImage(game.background_image)}></Image>

      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
}

export default GameCard;
