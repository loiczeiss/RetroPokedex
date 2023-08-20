import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useMyContext } from "./MyContext";



const Filter = ({ setActiveIndex}) => {
  const { setQueryLimit, setQueryOffset} = useMyContext()
  const firstQuery = () => {
    setActiveIndex(0);
    setQueryLimit(151);
    setQueryOffset(0)
  }
  const secondQuery = () => {
    setActiveIndex(0);
    setQueryLimit(100);
    setQueryOffset(151)
  }
  const thirdQuery = () => {
    setActiveIndex(0);
    setQueryLimit(135);
    setQueryOffset(251)
  }
  const fourthQuery = () => {
    setActiveIndex(0);
    setQueryLimit(107);
    setQueryOffset(386)
  }
  const fifthQuery = () => {
    setActiveIndex(0);
    setQueryLimit(155);
    setQueryOffset(493)
  }
  const sixthQuery = () => {
    setActiveIndex(0);
    setQueryLimit(121);
    setQueryOffset(649)
  }
  const seventhQuery = () => {
    setActiveIndex(0);
    setQueryLimit(85);
    setQueryOffset(721)
  }
  const eigthQuery = () => {
    setActiveIndex(0);
    setQueryLimit(89);
    setQueryOffset(809)
  }
  const ninthQuery = () => {
    setActiveIndex(0);
    setQueryLimit(105);
    setQueryOffset(905)
  }


 
  return (
    <div className=" overflow-auto flex  justify-center   mb-8">
     <div className=""><ul className="text-pokeGreen text-xl md:text-3xl font-PKMN">
        <li  onClick={firstQuery} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">First Generation</li>
        <li onClick={secondQuery} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">Second Generation</li>
        <li onClick={thirdQuery} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">Third Generation</li>
        <li onClick={fourthQuery} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">Fourth Generation</li>
        <li onClick={fifthQuery} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">Fifth Generation</li>
        <li onClick={sixthQuery} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">Sixth Generation</li>
        <li onClick={seventhQuery} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">Seventh Generation</li>
        <li onClick={eigthQuery} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6">Eight Generation</li>
        <li onClick={ninthQuery} className="hover:bg-pokeGreen hover:text-black  m-2 lg:m-6 mb-10">Ninth Generation</li>
     </ul></div>
    </div>
  );
};

export default Filter;
