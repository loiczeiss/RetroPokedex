import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useLazyQuery, gql } from '@apollo/client';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SelectedOnInput = gql`
  query pokemon($Name: String!) {
    pokemon(name: $Name) {
      abilities {
        ability {
          name
        }
      }
      height
      sprites {
        back_shiny
      }
      weight
      order
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
    }
  }
`;

export default function BasicModal({ open, handleClose, searchInput }) {
  const [ModalOnInput, { data, loading, error }] = useLazyQuery(SelectedOnInput, {
    variables: { Name: searchInput },
  });

  React.useEffect(() => {
    if (open) {
      ModalOnInput();
      console.log(data.pokemon.abilities[0].ability.name)
    }
  }, [open, ModalOnInput]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {data && (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {JSON.stringify(data.pokemon.abilities[0].ability.name, null, 2)} {/* Display the data object */}
            </Typography>
          )}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}