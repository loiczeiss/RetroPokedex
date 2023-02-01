import { gql } from "@apollo/client";

export const GET_GEN_1 = gql`
query pokemons($limit: Int = 151, $offset: Int = 0) {
  pokemons(limit: $limit, offset: $offset) {
   
    results {
      url
      name
      id
      image
    }
  }
}`