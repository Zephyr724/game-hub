import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import type { Genre } from "./hooks/useGenres";
import getCroppedImage from "@/services/image-url";

interface Props {
  genre: Genre;
  onClick: (argument: Genre) => void;
}

const GenreListItem = ({ genre, onClick }: Props) => {
  const handleClick = (genre: Genre) => {
    console.log("level 3", genre.slug);
    onClick(genre);
  };

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
          onClick={() => handleClick(genre)}
        >
          {genre.name}
        </Button>
      </HStack>
    </Box>
  );
};

export default GenreListItem;
