import React, { useEffect } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { useMyContext } from "./MyContext";

const SelectedOnInput = gql`
  query pokemon($Name: String!) {
    pokemon(name: $Name) {
      abilities {
        ability {
          name
        }
      }
      height
      sprites {
        front_default
      }
      weight
      order
      name
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
    }
  }
`;

const PokemonData = () => { 

  const {searchInput, setIsLoading} = useMyContext()
  
  const [WindowOnInput, { data, loading, error }] = useLazyQuery(
    SelectedOnInput,
    {
      variables: { Name: searchInput },
    }
  );

  useEffect(() => {
    WindowOnInput();
  }, []);

  useEffect(() => {
    setIsLoading(loading); // Set isLoading while loading is true
  }, [loading, setIsLoading]);

  if (error) {
    return <p>Error...</p>;
  }
  if (loading) return <p>Loading</p>;
  if (error) return <p>error...</p>;
  console.log(data);

  return (
    <div className="h-full bg-pokemonRed  overflow-y-auto   ">
      <div className=" m-1  border-2 border-white mb-16" >
        {data && data.pokemon && (
          <>
            <div className="w-full flex flex-col md:flex-row justify-between h-1/2 bg-black">
              <div className="w-full md:w-1/3">
                <div className="flex   mt-4 mx-4 justify-center">
                  <img
                    src={data.pokemon.sprites.front_default}
                    className="bg-white w-full h-full     "
                  ></img>
                </div>
                <p className="text-white font-PKMN  text-center">
                  No. {data.pokemon.order}
                </p>
              </div>

              <div className="w-full md:w-3/6 flex flex-col ">
                <p className="text-center text-2xl md:text-5xl md:text-left mt-4 md:mt-12 font-PKMN text-white font-bold">
                  {data.pokemon.name.toUpperCase()}
                </p>
                <ul className="flex justify-center md:justify-start list-none p-0 mt-6 md:mt-12 md:text-left">
                  {data.pokemon.types.map((type) => (
                    <li
                      className="mr-2 font-PKMN text-2xl md:text-3xl lg:text-5xl md:text-left text-white"
                      key={type.type.name}
                    >
                      {type.type.name.toUpperCase()}
                    </li>
                  ))}
                </ul>
                <p className="text-center  font-PKMN text-2xl md:text-3xl lg:text-5xl md:text-left mt-6 md:mt-12 text-white">
                  HEI: {data.pokemon.height / 10} M
                </p>
                <p className="text-center font-PKMN text-2xl md:text-3xl lg:text-5xl md:text-left mt-6 md:mt-12 mb-6 text-white">
                  WEI:{data.pokemon.weight / 10} KG
                </p>
              </div>
            </div>
            <div className="bg-black border-pokemonRed border-t-2">
              <p className="text-white font-PKMN font-bold text-2xl mt-6 text-center">ABILITIES</p>
             <ul className=" p-0 mt-6">
             {data.pokemon.abilities.map((ability) => (
                    <li className="mr-2 font-PKMN text-2xl md:text-3xl text-white text-center"
                    key={ability.ability.name}>
                      {ability.ability.name.toUpperCase()}

                    </li>      


                    ))}
             </ul>
             <p className="text-white font-PKMN font-bold text-2xl mt-6 text-center">
                MOVES
               </p>
               <ul className=" p-0 mt-6 ">
             {data.pokemon.moves.map((move) => (
                    <li className="mr-2 font-PKMN text-1xl md:text-3xl text-white text-center"
                    key={move.move.name}>
                      {move.move.name.toUpperCase()}

                    </li>      


                    ))}
             </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonData;
