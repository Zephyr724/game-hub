import { Box, Button, HStack, Image } from "@chakra-ui/react";
import type { Genre } from "./hooks/useGenres";
import getCroppedImage from "@/services/image-url";

interface Props {
  genre: Genre;
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreListItem = ({ genre, onSelectedGenre, selectedGenre }: Props) => {
  return (
    <Box key={genre.id}>
      <HStack>
        <Image
          src={getCroppedImage(genre.image_background)}
          boxSize="32px"
          borderRadius="8px"
          objectFit="cover"
        />
        <Box flex="1" minWidth={0}>
          <Button
            fontSize="lg"
            variant="plain"
            _hover={{ textDecoration: "underline" }}
            justifyContent="left"
            paddingLeft={0}
            onClick={() => onSelectedGenre(genre)}
            fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            whiteSpace="normal"
            wordBreak="break-word"
            textAlign="left"
          >
            {genre.name}
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};

export default GenreListItem;
