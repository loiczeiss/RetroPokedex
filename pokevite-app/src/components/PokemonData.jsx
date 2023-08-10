import React, { useEffect } from "react";
import { useLazyQuery, gql } from "@apollo/client";

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
  const variVari = "charizard";
  const [WindowOnInput, { data, loading, error }] = useLazyQuery(
    SelectedOnInput,
    {
      variables: { Name: variVari },
    }
  );

  useEffect(() => {
    WindowOnInput();
  }, []);

  if (loading) return <p>Loading</p>;
  if (error) return <p>error...</p>;
  console.log(data);

  return (
    <div className="h-screen bg-pokemonRed ">
      {data && data.pokemon && (
        <div className="w-full flex flex-row justify-between">
          <div className="w-1/3">
            <div className="w-48 bg-pokeGreen mt-4 mx-4 hover:bg-black">
              {" "}
              <img
                src={data.pokemon.sprites.front_default}
                className="w-48  mt-2  hue-rotate-90	 hover:hue-rotate-0 "
              ></img>
            </div>
          </div>

          <div className="w-3/6 flex flex-col ">
            <p className="text-5xl mt-4 font-sans font-black"
            >{data.pokemon.name.toUpperCase()}</p>
           {data.pokemon.types.map((type) => (
            <li className="list-none flex-row" key={type.type.name}>{type.type.name}</li>
          ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonData;
