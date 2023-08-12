
import Header from './components/Header'
import './App.scss'
import GptPokedex from './components/GptPokedex'
import Footer from './components/Footer'
import { useState } from 'react'
import PokemonData from './components/PokemonData'
import Filter from './components/Filter'
function App() {
const [activeIndex, setActiveIndex] = useState(0)
const [searchInput, setSearchInput] = useState("")
  return (
    <div className="App flex flex-col h-screen bg-black rounded-lg border-2 overflow-hidden">
    <Header searchInput={searchInput} setSearchInput={setSearchInput} setActiveIndex={setActiveIndex} activeIndex={activeIndex} />

    {activeIndex === 0 && (
      <GptPokedex searchInput={searchInput} setSearchInput={setSearchInput} setActiveIndex={setActiveIndex} />
    )}

    {activeIndex === 1 && (
      <PokemonData activeIndex={activeIndex} searchInput={searchInput} />
    )}
{activeIndex === 2 && (<Filter/>)}
    <Footer />
    
  </div>


  )
}

export default App
