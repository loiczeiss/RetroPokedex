import { useState } from "react";
import Searchbar from "./Searchbar";

const Header = ({
  searchInput,
  setSearchInput,
  setActiveIndex,
  activeIndex,
}) => {


    const GenClicked = () => {
        setActiveIndex(2)
    }

    const handleClickedButton = () => {
        setActiveIndex(0)
    }

  return (
    <>
    <div className="border-2 border-black rounded-none bg-pokemonRed flex flex-col md:flex-row z-10 w-full">
      <div className="w-full my-2 md:w-1/3 flex justify-center items-center">
      {activeIndex === 1 || activeIndex === 2 ? (
  <button className="bg-black text-pokeGreen font-PKMN h-min p-2 bg-50% md:text-2xl focus:bg-pokeGreen focus:text-black" onClick={handleClickedButton}>
    Home
  </button>
) : null}
        {activeIndex === 0 && (
          <button onClick={GenClicked} className="bg-black text-pokeGreen font-PKMN h-min p-2 bg-50% md:text-2xl focus:bg-pokeGreen focus:text-black hover:bg-pokeGreen hover:text-black">
            &nbsp;Select Gen&nbsp;
          </button>
        )}
      </div>
  
      <div className="w-full md:w-1/3 order-first md:order-none">
        <p className="text-4xl md:text-3xl lg:text-4xl m-5 text-center bg-black text-pokeGreen font-PKMN h-min p-2 ">Pokedex </p>
      </div>

      <div className="w-full my-2 md:w-1/3 flex justify-center">
        <Searchbar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  </>
  );
};

export default Header;
