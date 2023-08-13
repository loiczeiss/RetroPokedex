import Header from "./components/Header";
import "./App.scss";
import Pokedex from "./components/Pokedex";
import Footer from "./components/Footer";
import { useState } from "react";
import PokemonData from "./components/PokemonData";
import Filter from "./components/Filter";
function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [queryLimit, setQueryLimit] = useState(1010);
  const [queryOffset, setQueryOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App flex flex-col h-screen bg-black rounded-lg border-2 overflow-hidden">
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      />

      {isLoading ? (
        <div className="flex flex-col items-center h-screen justify-center">
          <img src="../trtet.gif" alt="" className="w-48" />
          <p className="text-white font-PKMN text-4xl">Loading...</p>
        </div>
      ) : null}
      {activeIndex === 0 && (
        <Pokedex
          queryLimit={queryLimit}
          queryOffset={queryOffset}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setActiveIndex={setActiveIndex}
          setIsLoading={setIsLoading}
        />
      )}

      {activeIndex === 1 && (
        <PokemonData
          activeIndex={activeIndex}
          searchInput={searchInput}
          setIsLoading={setIsLoading}
        />
      )}
      {activeIndex === 2 && (
        <Filter
          setQueryLimit={setQueryLimit}
          setQueryOffset={setQueryOffset}
          setActiveIndex={setActiveIndex}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
