import React from "react";
import renderer from "react-test-renderer";

import { PokemonAbilities } from "./index";

test("renders correctly", () => {
  const component = renderer.create(<PokemonAbilities />).toJSON();

  expect(component).toMatchSnapshot();
});
