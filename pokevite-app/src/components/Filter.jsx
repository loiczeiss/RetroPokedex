import { useQuery } from "@apollo/client";
import { useState } from "react";



const Filter = ({setSearchInput, setActiveIndex, searchInput}) => {
  
 


 
  return (
    <div className=" overflow-auto flex  justify-center   mb-8">
     <div className=""><ul className="text-pokeGreen text-xl md:text-3xl font-PKMN">
        <li className="hover:bg-pokeGreen hover:text-black  m-2">First Generation</li>
        <li className="hover:bg-pokeGreen hover:text-black  m-2">Second Generation</li>
        <li className="hover:bg-pokeGreen hover:text-black  m-2">Third Generation</li>
        <li className="hover:bg-pokeGreen hover:text-black  m-2">Fourth Generation</li>
        <li className="hover:bg-pokeGreen hover:text-black  m-2">Fifth Generation</li>
        <li className="hover:bg-pokeGreen hover:text-black  m-2">Sixth Generation</li>
        <li className="hover:bg-pokeGreen hover:text-black  m-2">Seventh Generation</li>
        <li className="hover:bg-pokeGreen hover:text-black  m-2">Eight Generation</li>
        <li className="hover:bg-pokeGreen hover:text-black  m-2 mb-10">Ninth Generation</li>
     </ul></div>
    </div>
  );
};

export default Filter;
