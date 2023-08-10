import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_GEN_1 } from "../gql/Get_Gen_1";
import * as React from "react";
// import BasicModal from "../components/Modal"



const GptPokedex = ({searchInput}) => {
  
  const { loading, error, data } = useQuery(GET_GEN_1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  if (loading) return <p>Loading</p>;
  if (error) return <p>error...</p>;


 
  return (
    <div className="h-screen -mb-24 ">
      <div className="flex-1 flex flex-wrap">
        {data.pokemons.results.map(({ id, name, image }) => (
          <div key={id} className="w-1/3 p-2 h-60 border-2 border-black rounded-lg flex flex-col">
            <div className="bg-pokeGreen rounded-lg h-full flex flex-col">
              {/* Add onClick handler to the img tag */}
              <img
                src={image}
                alt="pokemons sprites"
                className="w-32 m-2 border-4 border-black bg-pokemonRed self-center grayscale hover:grayscale-0"
                onClick={handleOpen}
              />

              <div className="flex justify-center">
                <p className="text-xl uppercase w-fit font-black p-2 justify-self-center hover:bg-black hover:text-white">
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
