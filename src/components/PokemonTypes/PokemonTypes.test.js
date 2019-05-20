import React from "react";
import renderer from "react-test-renderer";

import { PokemonTypes } from "./index";

test("renders correctly", () => {
  const component = renderer.create(<PokemonTypes />).toJSON();

  expect(component).toMatchSnapshot();
});
