// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { useLazyQuery, gql } from '@apollo/client';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// const SelectedOnInput = gql`
//   query pokemon($Name: String!) {
//     pokemon(name: $Name) {
//       abilities {
//         ability {
//           name
//         }
//       }
//       height
//       sprites {
//         back_shiny
//       }
//       weight
//       order
//       types {
//         type {
//           name
//         }
//       }
//       moves {
//         move {
//           name
//         }
//       }
//     }
//   }
// `;

// export default function BasicModal({ open, handleClose, searchInput }) {
//   const [ModalOnInput, { data, loading, error }] = useLazyQuery(SelectedOnInput, {
//     variables: { Name: searchInput },
//   });

//  /* The `React.useEffect` hook is used to perform side effects in functional components. In this case,
//  it is used to make a query to the GraphQL server using the `useLazyQuery` hook when the `open` prop
//  and `data` are updated. */
//   React.useEffect(() => {
//     if (open) {
//       ModalOnInput();
//       console.log(data)
//     }
//   }, [open, ModalOnInput]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error...</p>;

//   return (
//     <div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
      
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }