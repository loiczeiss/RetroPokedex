import { useLazyQuery, useQuery } from "@apollo/client";
import { useState, useEffect, useRef } from "react";
import { GET_GEN_1 } from "../gql/Get_Gen_1";
import React from "react";



const Searchbar = () => {
  const { loading, error, data } = useQuery(GET_GEN_1);
  const [searchInput, setSearchInput] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const searchbarRef = useRef(null);
  
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (searchbarRef.current && !searchbarRef.current.contains(event.target)) {
      setFilteredPokemons([]);
    }
  };

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
    setSearchInput(Name);
    setFilteredPokemons([]);
  };

  return (
    <div className=" flex flex-col place-content-center">
      <input
        ref={searchbarRef}
        className="w-52"
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <ul className="bg-white max-h-12 overflow-y-auto fixed top-12 w-52">
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