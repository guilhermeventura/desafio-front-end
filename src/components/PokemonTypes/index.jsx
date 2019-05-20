import React, { Component } from "react";
import { ChipSet, Chip } from "@material/react-chips";
import Button from "@material/react-button";

export class PokemonTypes extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemonsByType: [] };
  }

  componentDidMount() {
    this.getPokemonsByType(this.props.typeURL);
  }

  getPokemonsByType(typeURL) {
    if (!typeURL) return;
    return fetch(typeURL)
      .then(response => response.json())
      .then(data => {
        this.setState({ pokemonsByType: data.pokemon });
      });
  }

  renderPokemonTypes() {
    if (!this.props.types) return;

    let typesList = [];

    this.props.types.map(item => {
      typesList.push(
        <Chip
          onClick={() => this.getPokemonsByType(item.type.url)}
          id={item.type.name}
          label={item.type.name}
          key={item.type.name}
        />
      );
    });
    return <ChipSet choice>{typesList}</ChipSet>;
  }

  renderPokemonsByType() {
    if (!this.state.pokemonsByType) return;

    let pokemonsByTypeList = [];

    this.state.pokemonsByType.map(item => {
      pokemonsByTypeList.push(
        <Button key={item.pokemon.name}>{item.pokemon.name}</Button>
      );
    });

    return pokemonsByTypeList;
  }

  render() {
    return (
      <div>
        {this.renderPokemonTypes()}
        {this.state.pokemonsByType ? this.renderPokemonsByType() : ""}
      </div>
    );
  }
}
