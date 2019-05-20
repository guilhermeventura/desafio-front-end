import React from "react";
import LinearProgress from "@material/react-linear-progress";

export const PokemonStats = ({ stats }) => {
  const renderPokemonStats = items => {
    if (!stats) return;

    let statsList = [];
    items.map(item => {
      statsList.push(
        <React.Fragment key={item.stat.name}>
          {item.stat.name} - {item.base_stat} <br />
          <LinearProgress
            buffer={1}
            progress={parseInt(item.base_stat) / 100}
          />
        </React.Fragment>
      );
    });

    return statsList;
  };

  return <div>{renderPokemonStats(stats)}</div>;
};
