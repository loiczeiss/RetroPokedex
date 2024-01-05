import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import * as React from "react";
import { useMyContext } from "./MyContext";

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
  }
`;

const Pokedex = () => {
  const {
    setSearchInput,
    queryLimit,
    queryOffset,
    setActiveIndex,
    setIsLoading,
  } = useMyContext();

  const { loading, error, data } = useQuery(GET_GEN_1, {
    variables: { limit: queryLimit, offset: queryOffset },
  });

  useEffect(() => {
    setIsLoading(loading); // Set isLoading while loading is true
  }, [loading, setIsLoading]);

  if (error) {
    return <p>Error...</p>;
  }

  if (loading) return <p>Loading</p>;
  if (error) return <p>error...</p>;

  const handlePress = (pokemonName) => () => {
    setSearchInput(pokemonName.name);
 
    setActiveIndex(1);
  };

  return (
    <article className="h-screen  overflow-auto ">
      <div className="flex-1 flex flex-wrap mb-14">
        {data.pokemons.results.map(({ id, name, image }) => (
          <div
            key={id}
            className="w-full md:w-1/3 p-2 h-60 border-2 border-black flex flex-col"
          >
            <section
              onClick={handlePress({ name })}
              className="bg-pokeGreen h-full flex flex-col"
            >
              <img
                src={image}
                alt="pokemons sprites"
                className="w-32 m-2 border-4 border-black bg-black hover:bg-white self-center grayscale hover:grayscale-0"
                onClick={handlePress({ name })}
              />

              <div className="flex justify-center">
                <h2
                  onClick={handlePress({ name })}
                  className="text-xl uppercase w-fit font-black p-2 justify-self-center hover:bg-black hover:text-white"
                >
                  {name}
                </h2>
              </div>
              <div className="flex justify-center">
                <h2 className="text-xl uppercase font-semibold px-2 justify-self-center">
                  {id}
                </h2>
              </div>
            </section>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Pokedex;
