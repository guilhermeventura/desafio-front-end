import React, { Component } from "react";
import { Button } from "@material/react-button";

export class PokemonAbilities extends Component {
  constructor(props) {
    super(props);
    this.state = { showShortEffect: false, abilityShortEffect: "" };
  }

  getAbilityShortEffect(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          showShortEffect: true,
          abilityShortEffect: data.effect_entries[0].short_effect
        });
      });
  }

  renderPokemonAbilities(abilities) {
    if (!abilities) return;
    let abilitiesList = [];

    abilities.map(item => {
      if (item.is_hidden === true) return false;

      abilitiesList.push(
        <React.Fragment key={item.ability.name}>
          <Button
            outlined
            onClick={() => this.getAbilityShortEffect(item.ability.url)}>
            {item.ability.name}
          </Button>
          {this.state.showShortEffect && <p>{this.state.abilityShortEffect}</p>}
        </React.Fragment>
      );
    });

    return abilitiesList;
  }

  render() {
    let { abilities } = this.props;

    return <div>{this.renderPokemonAbilities(abilities)}</div>;
  }
}
