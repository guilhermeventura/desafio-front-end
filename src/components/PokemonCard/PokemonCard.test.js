import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import { PokemonCard } from "./index";
const mockData = {
  id: 22,
  name: "pokemontest",
  sprites: { front_default: "testimg.jpg" },
  addToPokedex: () => {},
  removePokemon: () => {}
};

test("renders correctly", () => {
  const component = renderer
    .create(
      <MemoryRouter>
        <PokemonCard
          data={mockData}
          addToPokedex={mockData.addToPokedex}
          removePokemon={mockData.removePokemon}
        />
      </MemoryRouter>
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});
