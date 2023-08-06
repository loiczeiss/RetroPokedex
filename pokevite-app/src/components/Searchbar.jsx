import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_GEN_1 } from "../gql/Get_Gen_1";
import React from "react";

const Searchbar = () => {
  const { loading, error, data } = useQuery(GET_GEN_1);
  const [searchInput, setSearchInput] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error...</p>;

  const pokemons = data.pokemons.results;

  const handleChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    if (input.length > 0) {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredPokemons(filtered);
    } else {
      setFilteredPokemons([]);
    }
  };

  const handleSelect = (pokemonName) => {
    setSearchInput(pokemonName);
    setFilteredPokemons([]);
  };

  return (
    <div className="flex flex-col place-content-center	 ">
      <input 
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <ul className="bg-white	" >
        {filteredPokemons.map((pokemon, index) => (
          <li key={index} onClick={() => handleSelect(pokemon.name)}>
            {pokemon.name}
          </li>
        ))}
      </ul>

     
    </div>
  );
};

export default Searchbar;