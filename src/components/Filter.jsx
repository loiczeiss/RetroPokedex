import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useMyContext } from "./MyContext";



const Filter = () => {
  const { setQueryLimit, setQueryOffset, setActiveIndex} = useMyContext()
  const performQuery = (limit, offset) => {
    setActiveIndex(0);
    setQueryLimit(limit);
    setQueryOffset(offset);
  };

 
  return (
    <article className=" overflow-auto flex  justify-center   mb-8">
     <div className=""><ul className="text-pokeGreen text-xl md:text-3xl font-PKMN">
        <li  onClick={() => performQuery(151,0)} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">First Generation</li>
        <li onClick={() => performQuery(100,151)} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">Second Generation</li>
        <li onClick={() => performQuery(135, 251)} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">Third Generation</li>
        <li onClick={() => performQuery(107, 386)} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6"> Generation</li>
        <li onClick={() => performQuery(155, 493)} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">Fifth Generation</li>
        <li onClick={() => performQuery(121, 649)} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">Sixth Generation</li>
        <li onClick={() => performQuery(85, 721)} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">Seventh Generation</li>
        <li onClick={() => performQuery(89, 809)} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">Eight Generation</li>
        <li onClick={() => performQuery(105, 905)} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6 mb-10">Ninth Generation</li>
     </ul></div>
    </article>
  );
};

export default Filter;
