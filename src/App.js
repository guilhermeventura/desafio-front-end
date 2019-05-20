import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { AppHeader, PokemonSearch } from "./components/";

import "./App.scss";
import PokemonList from "./containers/PokemonList";
import PokemonDetail from "./containers/PokemonDetail";

class App extends Component {
  state = { value: "PokeAPP" };

  render() {
    return (
      <div>
        <AppHeader />

        <Route exact path="/" component={PokemonSearch} />
        <Route path="/pokemon-list" component={PokemonList} />
        <Route path="/pokemon-details/:id" component={PokemonDetail} />
      </div>
    );
  }
}

export default App;
