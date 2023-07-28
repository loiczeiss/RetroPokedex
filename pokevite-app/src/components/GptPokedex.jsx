import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_GEN_1 } from "../gql/Get_Gen_1";
import * as React from "react";


const GptPokedex = () => {
  
  const { loading, error, data } = useQuery(GET_GEN_1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track if the modal is open
  const [selectedPokemon, setSelectedPokemon] = useState(null); // State to track the selected Pokemon

  if (loading) return <p>Loading</p>;
  if (error) return <p>error...</p>;

  // Function to handle opening the modal
  // const handleOpenModal = (pokemon) => {
  //   console.log(pokemon)
  //   setSelectedPokemon(pokemon);
  //   // setIsModalOpen(true);
  // };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  };
 
  return (
    <div className="h-screen overflow-y-auto">
      <div className="flex-1 flex flex-wrap mt-20">
        {data.pokemons.results.map(({ id, name, image }) => (
          <div key={id} className="w-1/3 p-2 h-60 border-2 border-black rounded-lg flex flex-col">
            <div className="bg-pokeGreen rounded-lg h-full flex flex-col">
              {/* Add onClick handler to the img tag */}
              <img
                src={image}
                alt="pokemons sprites"
                className="w-32 m-2 border-4 border-black bg-pokemonRed self-center grayscale hover:grayscale-0"
                onClick={() => handleOpenModal({ id, name, image })}
              />

              <div className="flex justify-center">
                <p className="text-xl uppercase w-fit font-black p-2 justify-self-center hover:bg-black hover:text-white">
                  {name}
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-xl uppercase font-semibold px-2 justify-self-center hover:bg-black hover:text-white">
                  {id}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render the Modal component if the modal is open */}
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
 
        </Modal>
      )}
    </div>
  );
};

export default GptPokedex;
