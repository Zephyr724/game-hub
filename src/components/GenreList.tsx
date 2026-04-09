import { Box, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";
import getCroppedImage from "@/services/image-url";
import GenreListItemSkeloton from "./GenreListSkeleton";
import GenreListItem from "./GenreListItem";
import GenreListItemContainer from "./GenreListItemContainer";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = Array.from({ length: 15 }, (_, i) => i + 1);

  if (error) return null;
  // if (isLoading) return <Spinner />;

  return (
    <List.Root>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreListItemContainer>
            <GenreListItemSkeloton key={skeleton} />
          </GenreListItemContainer>
        ))}
      {data.map((genre) => (
        <GenreListItemContainer>
          <GenreListItem genre={genre} key={genre.id} />
        </GenreListItemContainer>
      ))}
    </List.Root>
  );
};

export default GenreList;
