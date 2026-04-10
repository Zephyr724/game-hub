import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import type { Genre } from "./hooks/useGenres";
import getCroppedImage from "@/services/image-url";

interface Props {
  genre: Genre;
  onSelectedGenre: (genre: Genre) => void;
}

const GenreListItem = ({ genre, onSelectedGenre }: Props) => {
  return (
    <Box key={genre.id}>
      <HStack>
        <Image
          src={getCroppedImage(genre.image_background)}
          boxSize="32px"
          borderRadius="8px"
        />
        <Button
          fontSize="lg"
          variant="plain"
          _hover={{ textDecoration: "underline" }}
          justifyContent="left"
          paddingLeft={0}
          onClick={() => onSelectedGenre(genre)}
        >
          {genre.name}
        </Button>
      </HStack>
    </Box>
  );
};

export default GenreListItem;
