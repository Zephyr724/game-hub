import { Card, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import type { Game } from "./hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>

      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)} ></PlatformIconList>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
}

export default GameCard;
