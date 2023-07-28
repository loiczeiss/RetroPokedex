// import { useQuery } from "@apollo/client";
// import { useState } from "react";
// import { GET_GEN_1 } from "../gql/Get_Gen_1";
// import * as React from "react";
// import Modal from "./Modal";

// const Pokedex = () => {
//   const { loading, error, data } = useQuery(GET_GEN_1);

//   if (loading) return <p>Loading</p>;

//   if (error) return <p>error...</p>;

//   return (
//     <div className="h-screen overflow-y-auto"> {/* Set a fixed height and overflow-y: auto */}
//       <div className="flex-1 flex flex-wrap  mt-20">
//         {data.pokemons.results.map(({ id, name, image }) => (
//       <>
//             <div class="w-1/3 p-2  h-60	border-2  border-black rounded-lg flex flex-col ">
//               <div className=" bg-pokeGreen rounded-lg h-full flex flex-col">
//                 <img
       
//                   src={image}
//                   alt="pokemons sprites"
//                   className="w-32 m-2 border-4 border-black bg-pokemonRed self-center grayscale hover:grayscale-0                    "
//                 />

//                 <div className="flex justify-center">
//                   {" "}
//                   <p className="text-xl uppercase w-fit font-black p-2 justify-self-center hover:bg-black hover:text-white ">
//                     {name}
//                   </p>
//                 </div>
//                 <div className="flex justify-center ">
//                   {" "}
//                   <p className="text-xl uppercase font-semibold px-2 justify-self-center hover:bg-black hover:text-white  ">
//                     {id}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pokedex;
