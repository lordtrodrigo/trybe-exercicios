import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    return (
        pokemons.map((item) => (
            <div className="pokemon-box">
                <Pokemon pokemon={item} />
            </div> 
        ))
    );
  }
};

export default Pokedex;
