import type { GameQuery } from "@/App";
import useData from "./useData";
import type { Genre } from "./useGenres";
import type { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  dates: Date;
  ordering: Ordering;
}

export interface Ordering {
  name: string;
  released: Date;
  added: Date;
  created: Date;
  ratring: number;
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering:gameQuery.sortOrder
      },
    },
    [gameQuery],
  );
};

export default useGames;
