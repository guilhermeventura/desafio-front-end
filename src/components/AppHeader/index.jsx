import React from "react";
import { Link, withRouter } from "react-router-dom";

import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from "@material/react-top-app-bar";
import MaterialIcon from "@material/react-material-icon";

import "./AppHeader.scss";

const AppHeader = props => {
  return (
    <div>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection align="start">
            {props.location.pathname != "/" && (
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon
                  hasRipple
                  icon="arrow_back"
                  onClick={() => props.history.goBack()}
                />
              </TopAppBarIcon>
            )}
            <TopAppBarTitle>Pokedex</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection align="end" role="toolbar">
            <TopAppBarIcon actionItem tabIndex={0}>
              <Link to="/pokemon-list/">
                <MaterialIcon
                  aria-label="print page"
                  hasRipple
                  icon="shopping_basket"
                />
              </Link>
            </TopAppBarIcon>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </div>
  );
};

export default withRouter(AppHeader);
