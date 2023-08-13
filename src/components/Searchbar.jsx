import { useQuery } from "@apollo/client";
import { useState, useEffect, useRef } from "react";
import { GET_GEN_1 } from "../gql/Get_Gen_1";
import React from "react";



const Searchbar = ({searchInput, setSearchInput, setActiveIndex}) => {
  const { loading, error, data } = useQuery(GET_GEN_1);
 const [ modInput, setModInput] = useState("")
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
    setModInput(input);

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
    setActiveIndex(1)
    setModInput("")
    
  };


  return (
    <div className="relative flex flex-col place-content-center">
     

      <input
        ref={searchbarRef}
        className="hover:bg-pokeGreen hover:placeholder-black w-52 lg:w-64 bg-black text-pokeGreen border-none placeholder:text-pokeGreen focus:outline-none  font-PKMN focus:border-none border focus:bg-pokeGreen focus:text-black text-sm lg:text-lg	 p-2"
        type="search"
        placeholder="Enter PKMN name"
        onChange={handleChange}
        value={modInput}
        
      />
      <ul className="bg-black max-h-12 overflow-y-auto w-52 md:w-64 md:absolute md:top-14 font-PKMN " >
        {filteredPokemons.map((pokemon, index) => (
          <li className="hover:bg-pokeGreen hover:text-black text-pokeGreen pl-2 text-sm md:text-lg" key={index}  onClick={() => handleSelect(pokemon.name)} >
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Searchbar;