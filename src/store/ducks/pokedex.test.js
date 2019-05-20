import * as pokedex from "./pokedex";

describe("Pokedex Duck", () => {
  it("should create an action to add a pokemon to pokedex", () => {
    const fakeId = 25; // of course is a pikachu
    const expectedAction = {
      type: pokedex.TYPES.ADD_TO_POKEDEX,
      pokemon: fakeId
    };

    expect(pokedex.addToPokedex(fakeId)).toEqual(expectedAction);
  });

  it("should create an action to remove a pokemon from pokedex", () => {
    const fakeId = 2; // because we remove from store based on the index of the pokedex item, not the pokemon

    const expectedAction = {
      type: pokedex.TYPES.REMOVE_FROM_POKEDEX,
      pokemon: fakeId
    };

    expect(pokedex.removeFromPokedex(fakeId)).toEqual(expectedAction);
  });
});
