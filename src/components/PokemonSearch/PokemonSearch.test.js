import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";

import { default as PokemonSearch } from "./index";

describe("<PokemonSearch />", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({ pokemons: [] });
  test("renders correctly", () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <PokemonSearch />
        </Provider>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
