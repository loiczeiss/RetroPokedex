
import Header from './components/Header'
import './App.scss'
import GptPokedex from './components/GptPokedex'
import Footer from './components/Footer'

function App() {


  return (
    <div className="App  flex  flex-col  h-full bg-black rounded-lg border-2 d ">
    
<Header/>
  <GptPokedex/>
   <Footer/>
    </div>
  )
}

export default App
