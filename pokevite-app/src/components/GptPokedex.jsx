import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";

import * as React from "react";
import { AllPokemons } from "../gql/AllPokemons";
// import BasicModal from "../components/Modal"

const GET_GEN_1 = gql`
query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
   
    results {
      url
      name
      id
      image
    }
  }
}`


const GptPokedex = ({setSearchInput, setActiveIndex, queryLimit, queryOffset}) => {
  
  const { loading, error, data } = useQuery(GET_GEN_1, {
    variables: { limit: queryLimit, offset: queryOffset },
  });
  const [open, setOpen] = useState(false);
 




  if (loading) return <p>Loading</p>;
  if (error) return <p>error...</p>;

  const handlePress = (pokemonName) => () => {
    setSearchInput(pokemonName.name);
    setOpen(true);
    setActiveIndex(1)
  };

 
  return (
    <div className="h-screen  overflow-auto ">
      <div className="flex-1 flex flex-wrap mb-8">
        {data.pokemons.results.map(({ id, name, image }) => (
          <div key={id} className="w-full md:w-1/3 p-2 h-60 border-2 border-black flex flex-col">
            <div onClick={handlePress({name})} className="bg-pokeGreen h-full flex flex-col">
              {/* Add onClick handler to the img tag */}
              <img
                src={image}
                alt="pokemons sprites"
                className="w-32 m-2 border-4 border-black bg-black hover:bg-white self-center grayscale hover:grayscale-0"
                onClick={handlePress({name})}
              />

              <div className="flex justify-center">
                <p onClick={handlePress({name})} className="text-xl uppercase w-fit font-black p-2 justify-self-center hover:bg-black hover:text-white">
                  {name}
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-xl uppercase font-semibold px-2 justify-self-center">
                  {id}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
     {/* <BasicModal open={open} handleClose={handleClose} searchInput={searchInput}/> */}
      
    </div>
  );
};

export default GptPokedex;
