import Searchbar from "./Searchbar"

const Header = ({searchInput,setSearchInput, setActiveIndex}) => {





    return<>
        <div className="  border-b-2 border-black bg-pokemonRed flex flex-row justify-around	z-10 w-full	">
        <div className="bg-white self-center	"><p>filters</p></div>
            <p className="text-4xl m-5">Pokemon</p>
            <Searchbar searchInput={searchInput} setSearchInput={setSearchInput} setActiveIndex={setActiveIndex}/>
        </div>
    </>
}

export default Header