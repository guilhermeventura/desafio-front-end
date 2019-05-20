import React, { Component } from "react";
import { connect } from "react-redux";

import { Columns } from "react-bulma-components/full";

import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import { Headline3 } from "@material/react-typography";

import { catchPokemon } from "./../../store/ducks/pokedex";

import { PokemonCard } from "./../../components";

import "./PokemonSearch.scss";

import * as CONFIG from "./../../config.dev";

class PokemonSearch extends Component {
  state = {};

  getPokemon(id) {
    return fetch(`${CONFIG.API_BASE_URL}pokemon/${id}`)
      .then(response => response.json())
      .then(json => this.setState({ pokemon: json }));
  }

  render() {
    return (
      <React.Fragment>
        <Columns centered>
          <Columns.Column size="half">
            <Headline3>Search a pokemon below</Headline3>
            <br />
            <TextField
              outlined
              label="Name or number..."
              onTrailingIconSelect={() => this.getPokemon(this.state.value)}
              trailingIcon={<MaterialIcon role="button" icon="search" />}>
              <Input
                value={this.state.value}
                onChange={e =>
                  this.setState({
                    value: e.currentTarget.value
                  })
                }
              />
            </TextField>
          </Columns.Column>
        </Columns>
        {this.state.pokemon && (
          <Columns centered>
            <Columns.Column size="one-quarter">
              <PokemonCard
                data={this.state.pokemon}
                addToPokedex={() =>
                  this.props.catchPokemon(this.state.pokemon.id)
                }
              />
            </Columns.Column>
          </Columns>
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    catchPokemon: id => {
      dispatch(catchPokemon(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PokemonSearch);
