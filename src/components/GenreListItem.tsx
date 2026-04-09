import { Box, HStack, Image, Text } from "@chakra-ui/react";
import type { Genre } from "./hooks/useGenres";
import getCroppedImage from "@/services/image-url";

interface Props {
  genre: Genre;
}

const GenreListItem = ({ genre }: Props) => {
  return (
    <Box key={genre.id}>
      <HStack>
        <Image
          src={getCroppedImage(genre.image_background)}
          boxSize="32px"
          borderRadius="8px"
        />
        <Text fontSize="lg"> {genre.name}</Text>
      </HStack>
    </Box>
  );
};

export default GenreListItem;
