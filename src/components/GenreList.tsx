import { Box, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";
import getCroppedImage from "@/services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <List.Root>
      {data.map((genre) => (
        <Box key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImage(genre.image_background)}
              boxSize="32px"
              borderRadius="8px"
            />
            <Text fontSize="lg"> {genre.name}</Text>
          </HStack>
        </Box>
      ))}
    </List.Root>
  );
};

export default GenreList;
