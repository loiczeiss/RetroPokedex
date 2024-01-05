import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { MyContextProvider } from './components/MyContext';


const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app",
  cache: new InMemoryCache()
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
<MyContextProvider><App/></MyContextProvider>
  </ApolloProvider>,

);