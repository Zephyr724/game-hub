import { Box, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListItemSkeloton = () => {
  return (
    <Box>
      <HStack>
        <Skeleton boxSize="32px" borderRadius="8px" />
        <SkeletonText noOfLines={1} />
      </HStack>
    </Box>
  );
};

export default GenreListItemSkeloton;
