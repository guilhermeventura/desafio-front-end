import * as CONFIG from "../../config.dev";

// Action Types
export const TYPES = {
  ADD_TO_POKEDEX: "@@pokedex/ADD_TO_POKEDEX",
  REMOVE_FROM_POKEDEX: "@@pokedex/REMOVE_FROM_POKEDEX",
  GET_POKEMON_BY_ID: "@@pokedex/GET_POKEMON_BY_ID",
  CHANGE_POKEMON_IMAGE: "@@pokedex/CHANGE_POKEMON_IMAGE"
};

const initialState = {
  pokemons: []
};

// Reducer
export const pokedex = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_POKEDEX:
      return Object.assign({}, state, {
        pokemons: state.pokemons.concat(action.pokemon),
        isFetching: false
      });
    case TYPES.REMOVE_FROM_POKEDEX:
      const newState = [
        ...state.pokemons.slice(0, action.pokemon),
        ...state.pokemons.slice(action.pokemon + 1)
      ];
      return Object.assign({}, state, {
        pokemons: newState
      });
    case TYPES.GET_POKEMON_BY_ID:
      return Object.assign({}, state, {
        pokemon: state.pokemons[action.pokemon]
      });
    case TYPES.CHANGE_POKEMON_IMAGE:
      return Object.assign({}, state, {
        pokemon: {
          ...state.pokemon,
          sprites: {
            front_default: action.pokemonImage
          }
        }
      });

    default:
      return state;
  }
};

// Action Creators
export const addToPokedex = pokemon => {
  if (!pokemon) return;
  return {
    type: TYPES.ADD_TO_POKEDEX,
    pokemon: pokemon
  };
};

export const catchPokemon = id => dispatch => {
  return fetch(`${CONFIG.API_BASE_URL}pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
      dispatch(addToPokedex(data));
    });
};

export const removeFromPokedex = id => {
  return {
    type: TYPES.REMOVE_FROM_POKEDEX,
    pokemon: id
  };
};

export const getPokemonById = id => {
  return {
    type: TYPES.GET_POKEMON_BY_ID,
    pokemon: id
  };
};

export const changePokemonImage = payload => {
  return {
    type: TYPES.CHANGE_POKEMON_IMAGE,

    pokemonImage: payload.pokemonImage,
    id: payload.id
  };
};
