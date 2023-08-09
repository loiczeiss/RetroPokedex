import Searchbar from "./Searchbar"
const Header = (searchInput) => {





    return<>
        <div className="fixed left-0 top-0 border-b-2 border-black bg-pokemonRed flex flex-row justify-around	z-10 w-full	">
        <div className="bg-white self-center	"><p>filters</p></div>
            <p className="text-4xl m-5">Pokemon</p>
            <Searchbar searchInput={""}/>
        </div>
    </>
}

export default Header