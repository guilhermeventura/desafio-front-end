import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";

import { default as PokemonList } from "./index";

describe("<PokemonList />", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({ pokemons: [] });
  it("renders correctly", () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <PokemonList />
        </Provider>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
