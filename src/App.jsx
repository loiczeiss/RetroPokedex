import React, { useState } from "react";
import Header from "./components/Header";
import "./App.scss";
import Pokedex from "./components/Pokedex";
import Footer from "./components/Footer";
import PokemonData from "./components/PokemonData";
import Filter from "./components/Filter";
import gif from "./img/trtet.gif";
import { MyContextProvider, useMyContext } from "./components/MyContext";

// Define the AppContent component that wraps the content
function AppContent() {
  const { isLoading, activeIndex } = useMyContext();
  

  return (
    <div className="App flex flex-col h-screen bg-black rounded-lg border-2 overflow-hidden">
      <Header />

      {isLoading ? (
        <div className="flex flex-col items-center h-screen justify-center">
          <img src={gif} alt="" className="w-48" />
          <p className="text-white font-PKMN text-2xl md:text-4xl">
            Loading...
          </p>
        </div>
      ) : null}
        {activeIndex === 0 && <Pokedex />}

        {activeIndex === 1 && <PokemonData />}

      {activeIndex === 2 && <Filter />}
      <Footer />
    </div>
  );
}

// Wrap the AppContent component with the context provider
function App() {
  return (
    <MyContextProvider>
      <AppContent />
    </MyContextProvider>
  );
}

export default App;
