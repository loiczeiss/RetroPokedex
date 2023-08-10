
import Header from './components/Header'
import './App.scss'
import GptPokedex from './components/GptPokedex'
import Footer from './components/Footer'
import { useState } from 'react'
import PokemonData from './components/PokemonData'

function App() {

const [searchInput, setSearchInput] = useState("")
  return (
    <div className="App flex  flex-col  h-full bg-black rounded-lg border-2 overflow-y-auto">
    
<Header searchInput={searchInput} setSearchInput={setSearchInput}/>

  {/* <GptPokedex searchInput={searchInput}/> */}
  <PokemonData/>
   <Footer/>
    </div>
  )
}

export default App
