import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_GEN_1 } from "../gql/Get_Gen_1";
import React from "react";
const Searchbar = () => {
  const { loading, error, data } = useQuery(GET_GEN_1);
  const [searchInput, setsearchInput] = useState("");
  
  if (loading) return <p>Loading</p>
if (error) return <p>Error...</p>

const SearchList = [data.pokemons.results]
console.log(SearchList[0][1])

const handleChange = (e) => {
    e.preventDefault();
    setsearchInput(e.target.value)
}; 
if (searchInput.length > 0){
    console.log()
SearchList[0].filter((pokemon) => {
   return pokemon.name.match(searchInput)

});
}
  return <>
  <input
    type="search"
    placeholder="Search here"
    onChange={handleChange}
    value={searchInput}/>
    
    <table>
  <tr>
    <th>Country</th>
    <th>Continent</th>

  </tr>

{SearchList[0].map((pokemon, index) => {



  <tr>
    <td>{pokemon.name}</td>
    <td>{pokemon.continent}</td>

  </tr>

})}
</table>

</>
};

export default Searchbar;
