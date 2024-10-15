import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../Entities/Game";
import CriticScore from "./CriticScore";
import DefinationItem from "./DefinationItem";

interface Props {
  game: Game;
}

const GameAtributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinationItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinationItem>

      <DefinationItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinationItem>

      <DefinationItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinationItem>

      <DefinationItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text>{publisher.name}</Text>
        ))}
      </DefinationItem>
    </SimpleGrid>
  );
};

export default GameAtributes;
