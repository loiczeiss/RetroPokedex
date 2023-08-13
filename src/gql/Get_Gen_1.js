import { gql } from "@apollo/client";

export const GET_GEN_1 = gql`
query pokemons($limit: Int = 1010, $offset: Int = 0) {
  pokemons(limit: $limit, offset: $offset) {
   
    results {
      url
      name
      id
      image
    }
  }
}`