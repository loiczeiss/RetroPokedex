
import Header from './components/Header'
import './App.scss'
import GptPokedex from './components/GptPokedex'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {

const [searchInput, setSearchInput] = useState("")
  return (
    <div className="App  flex  flex-col  h-full bg-black rounded-lg border-2 d ">
    
<Header searchInput={searchInput} setSearchInput={setSearchInput}/>

  <GptPokedex searchInput={searchInput}/>
   <Footer/>
    </div>
  )
}

export default App
