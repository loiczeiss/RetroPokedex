
import Header from './components/Header'
import './App.scss'
import GptPokedex from './components/GptPokedex'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {

const [searchInput, setsearchInput] = useState("")
  return (
    <div className="App  flex  flex-col  h-full bg-black rounded-lg border-2 d ">
    
<Header searchProp={setsearchInput}/>
  <GptPokedex/>
   <Footer/>
    </div>
  )
}

export default App
