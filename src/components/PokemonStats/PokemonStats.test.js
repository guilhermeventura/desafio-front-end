import React from "react";
import renderer from "react-test-renderer";

import { PokemonStats } from "./index";

test("renders correctly", () => {
  const component = renderer.create(<PokemonStats />).toJSON();

  expect(component).toMatchSnapshot();
});
