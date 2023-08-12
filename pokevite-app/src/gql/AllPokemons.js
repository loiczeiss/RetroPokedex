import { gql } from "@apollo/client";

export const AllPokemons = gql`
query pokemons {
    pokemons{
      results{
        url
        name
        id
        image
      }
    }
  }



  `