import { createContext, useContext, useState, useRef, useEffect } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [searchInput, setSearchInput] = useState("");
  const [queryLimit, setQueryLimit] = useState(1010);
  const [queryOffset, setQueryOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const searchbarRef = useRef(null);
  const [ modInput, setModInput] = useState("")
  
  const [open, setOpen] = useState(false);

 
     const contextValues = {
 
    searchInput,
    setSearchInput,
    queryLimit,
    setQueryLimit,
    queryOffset,
    setQueryOffset,
    isLoading,
    setIsLoading,

    setOpen,
    filteredPokemons, setFilteredPokemons, searchbarRef, modInput, setModInput, activeIndex, setActiveIndex
  };


  return (
    <MyContext.Provider value={contextValues}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);