import React from "react";
import { Link } from "react-router-dom";

import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";
import { Headline5 } from "@material/react-typography";
import Button from "@material/react-button";

import "./PokemonCard.scss";
export const PokemonCard = ({
  data,
  removePokemon,
  addToPokedex,
  pokedexId
}) => {
  return (
    <Card className="pokemon__card">
      <Link to={`/pokemon-details/${pokedexId}`}>
        <CardPrimaryContent>
          <Headline5>{data.name}</Headline5>
          <CardMedia square imageUrl={data.sprites.front_default} />
        </CardPrimaryContent>
      </Link>
      <CardActions>
        {addToPokedex && (
          <CardActionButtons>
            <Button onClick={addToPokedex}>Catch!</Button>
          </CardActionButtons>
        )}
        {removePokemon && (
          <CardActionIcons>
            <i onClick={removePokemon}>Remove</i>
          </CardActionIcons>
        )}
      </CardActions>
    </Card>
  );
};
