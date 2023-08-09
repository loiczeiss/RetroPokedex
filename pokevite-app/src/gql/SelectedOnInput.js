import { gql } from "@apollo/client";

export const SelectedOnInput = gql`query pokemon ($Name: String!){
    pokemon(name: $Name) {
      abilities {
        ability {
          name
        }
      }
      height
           sprites{back_shiny}
    weight
      order
     types{type{name}}
      moves{move{name}}
    }
  }
`

