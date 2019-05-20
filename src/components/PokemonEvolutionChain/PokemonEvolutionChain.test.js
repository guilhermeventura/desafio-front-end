import React from "react";
import renderer from "react-test-renderer";

import { PokemonEvolutionChain } from "./index";

test("renders correctly", () => {
  const component = renderer.create(<PokemonEvolutionChain />).toJSON();

  expect(component).toMatchSnapshot();
});
