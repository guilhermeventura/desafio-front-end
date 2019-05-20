import React, { Component } from "react";
import { connect } from "react-redux";

import { Columns } from "react-bulma-components/full";
import { Headline3, Headline6 } from "@material/react-typography";

import {
  PokemonEvolutionChain,
  PokemonAbilities,
  PokemonStats,
  PokemonTypes,
  PokemonImageUploader
} from "./../../components";

import "./PokemonDetail.scss";
import { getPokemonById, changePokemonImage } from "../../store/ducks/pokedex";

class PokemonDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLoadedPokemonDetail: false
    };
  }

  renderPokemonDetail(data) {
    if (!data) return;

    return (
      <div className="pokemon-details__container">
        <Columns centered>
          <Columns.Column size={6}>
            <Headline3>
              #{data.id} - {data.name}
            </Headline3>
            <img src={data.sprites.front_default} alt={data.name} />
            <PokemonImageUploader
              onFileLoaded={imageFile => {
                this.props.changePokemonImage({
                  pokemonImage: imageFile,
                  id: this.props.match.params.id
                });
              }}
            />
            <p>Weight: {data.weight}</p>
          </Columns.Column>
          <Columns.Column size={6}>
            <PokemonStats stats={data.stats} />
          </Columns.Column>
        </Columns>
        <Columns centered>
          <Columns.Column size={6}>
            <Headline6>Abilities:</Headline6>
            <PokemonAbilities abilities={data.abilities} />
          </Columns.Column>
          <Columns.Column size={6}>
            <Headline6>Types:</Headline6>
            <PokemonTypes types={data.types} />
          </Columns.Column>
        </Columns>

        <Columns centered>
          <Columns.Column size={12}>
            <Headline6>Evolution Chain:</Headline6>
            <PokemonEvolutionChain id={data.id} />
          </Columns.Column>
        </Columns>
      </div>
    );
  }

  componentDidMount() {
    this.props.getPokemonById(this.props.match.params.id);
  }

  render() {
    return (
      <Columns>
        <Columns.Column>
          {this.renderPokemonDetail(this.props.pokemon)}
        </Columns.Column>
      </Columns>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon
});

const mapDispatchToProps = dispatch => {
  return {
    getPokemonById: id => {
      dispatch(getPokemonById(id));
    },

    changePokemonImage: data => {
      dispatch(changePokemonImage(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
