import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score >= 75 ? "green" : score >= 65 ? "yellow" : "";
  return (
    <Badge fontSize={14} paddingX={2} borderRadius={"4px"} colorPalette={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;
