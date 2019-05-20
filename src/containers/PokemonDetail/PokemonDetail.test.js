import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";

import { default as PokemonDetail } from "./index";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockData = {
  params: {
    id: 1
  }
};
test("renders correctly", () => {
  const store = mockStore({ pokemons: [] });
  const component = renderer
    .create(
      <Provider store={store}>
        <PokemonDetail match={mockData} />
      </Provider>
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});
