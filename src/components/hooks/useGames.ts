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
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
) => {
  console.log("debugging", selectedPlatform);
  return useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id],
  );
};

export default useGames;
