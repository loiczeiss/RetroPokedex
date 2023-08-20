import { useState } from "react";
import Searchbar from "./Searchbar";
import { useMyContext } from "./MyContext";

const Header = ({}) => {
  const { searchInput, setSearchInput, setActiveIndex, activeIndex } =
    useMyContext();

  const GenClicked = () => {
    setActiveIndex(2);
  };

  const handleClickedButton = () => {
    setActiveIndex(0);
  };

  return (
    <>
      <header className="border-2 border-black rounded-none bg-pokemonRed flex flex-col md:flex-row z-10 w-full">
        <section className="w-full my-2 md:w-1/3 flex justify-center items-center">
          {activeIndex === 1 || activeIndex === 2 ? (
            <button
              className="bg-black text-pokeGreen font-PKMN h-min p-2 bg-50% md:text-2xl focus:bg-pokeGreen focus:text-black"
              onClick={handleClickedButton}
            >
              Home
            </button>
          ) : null}
          {activeIndex === 0 && (
            <button
              onClick={GenClicked}
              className="bg-black text-pokeGreen font-PKMN h-min p-2 bg-50% md:text-2xl focus:bg-pokeGreen focus:text-black hover:bg-pokeGreen hover:text-black"
            >
              &nbsp;Select Gen&nbsp;
            </button>
          )}
        </section>

        <section className="w-full md:w-1/3 order-first md:order-none">
          <h1 className="text-4xl md:text-3xl lg:text-4xl m-5 text-center bg-black text-pokeGreen font-PKMN h-min p-2 ">
            Pokedex{" "}
          </h1>
        </section>

        <section className="w-full my-2 md:w-1/3 flex justify-center">
          <Searchbar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setActiveIndex={setActiveIndex}
          />
        </section>
      </header>
    </>
  );
};

export default Header;
