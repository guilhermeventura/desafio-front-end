import React, { Component } from "react";
import { connect } from "react-redux";

import { Headline3 } from "@material/react-typography";

import { Columns } from "react-bulma-components/full";
import { removeFromPokedex } from "./../../store/ducks/pokedex";
import { PokemonCard } from "./../../components";

import "./PokemonList.scss";

class PokemonList extends Component {
  state = {
    hasPokemons: false
  };

  renderPokemonList() {
    let pokemons = this.props["pokemonList"];
    let pokemonList = [];

    if (pokemons.length > 0) {
      for (let i = 0; i < pokemons.length; i++) {
        pokemonList.push(
          <Columns.Column key={`pokemon-${pokemons[i].id}`} size="one-quarter">
            <PokemonCard
              data={pokemons[i]}
              removePokemon={() => this.props.removeFromPokedex(i)}
              pokedexId={i}
            />
          </Columns.Column>
        );
      }
      return pokemonList;
    }
  }

  componentDidMount() {
    if (this.props["pokemonList"].length > 0) {
      this.setState({ hasPokemons: true });
    }
  }

  render() {
    return [
      <Columns centered>
        <Columns.Column size="half">
          <Headline3>
            {this.state.hasPokemons ? "Your Pokedex" : "Your Pokedex is empty"}
          </Headline3>
        </Columns.Column>
      </Columns>,
      <Columns centered>{this.renderPokemonList()}</Columns>
    ];
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemons
});

const mapDispatchToProps = dispatch => {
  return {
    removeFromPokedex: id => {
      dispatch(removeFromPokedex(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList);
