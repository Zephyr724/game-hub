import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./components/hooks/useGenres";

function App() {
  const showAside = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [selectedGenre, setGenre] = useState("");

  const getGenre = (genre: Genre) => {
    console.log("level 1", genre.slug);
    setGenre(genre.slug);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {showAside && (
        <GridItem area="aside" paddingX={5}>
          <GenreList onClick={(genre) => getGenre(genre)} />
        </GridItem>
      )}

      <GridItem area="main">
        <GameGrid genreSlug={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
