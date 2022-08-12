import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import legoCategories from './legoCategories';
import { db } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: [300, 500, 800],
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const newLegoButtonStyle = {
  position: 'fixed',
  bottom: "20px",
  right: "20px",
  width: '300px',
  "z-index": 1,
}

const newLegoItem = {}

const NewItem = ({stateChanger, ischanged}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [errorMessage, setErrorMessage] = useState(['Name is required', 'Year is required', 'ID is required', 'Category is required']);
  const [errorMessage, setErrorMessage] = useState([]);
  const [enableSubmit, setEnableSubmit] = useState(true);
  
  const legosCollection = collection(db, "legos");

  const cancelForm = () => {
    delete newLegoItem.id;
    delete newLegoItem.name;
    delete newLegoItem.category;
    delete newLegoItem.year;
    delete newLegoItem.description;
    delete newLegoItem.image;
    handleClose();
  }

  const changeValues = (key, value) => {
    const mapNameToProperty = {
      legoId: 'id',
      legoName: 'name',
      legoCategory: 'category',
      legoYear: 'year',
      legoDescription: 'description',
      legoImage: 'image',
  };

  const property = mapNameToProperty[key];

  switch (property) {
    case 'id':
      if (value > 0) {
        newLegoItem[property] = Number(value);
      } else {
        alert('Az ID egy pozitív szám!')
      }
      break;
    case 'year':
      const actualYear = new Date();
      if (value >= 1990 && value <= actualYear.getFullYear()) {
        newLegoItem[property] = Number(value);
      }
      break;
    case 'name':
      const index = errorMessage.indexOf('Name is required');
      console.log(errorMessage);
      let tempError = [];
      if (value.length >= 0 && index >=0 ) {
        newLegoItem.name = value;
        errorMessage.splice(index, 1);
        tempError = errorMessage;
      } else
      if (value.length > 0 && index === -1) {
        newLegoItem.name = value;
        tempError = errorMessage;
      } else
      if (value.length === 0 && index === -1) {
        newLegoItem.name = value;
        errorMessage.push('Name is required')
        tempError = errorMessage;
        }
        setErrorMessage(tempError);
      break;
    case 'image':
      newLegoItem[property] = value;
      break;
    case 'description':
      newLegoItem[property] = value;
      break;
    case 'category':
      newLegoItem[property] = value;
      break;
    default:
      break;
  }
}

const insertLego = async () => {
  await addDoc(legosCollection, newLegoItem);
  stateChanger(ischanged ? false : true);
  cancelForm();
}

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleOpen} sx={newLegoButtonStyle}>Add new lego</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a new lego item!
          </Typography>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="legoId"
                label="ID"
                type="number"
                sx={{ width: 250, }}
                onChange={e => {changeValues(e.target.id, e.target.value)}}
              />
              <TextField
                required
                id="legoName"
                label="Name"
                defaultValue=""
                onChange={e => {changeValues(e.target.id, e.target.value)}}
              />
              <FormControl sx={{ m: 1, width: 215.833, }}>
                <InputLabel >Category</InputLabel>
                <Select
                  labelId="legoCategory"
                  name="legoCategory"
                  label="Category"
                  defaultValue={legoCategories[0]}
                  value={newLegoItem.category}
                  onChange={e => {changeValues(e.target.name, e.target.value)}}
                >
                  {legoCategories.map((oneCategory) => <MenuItem key={oneCategory} value={oneCategory}>{oneCategory}</MenuItem>)}
                </Select>
              </FormControl>
              <TextField
                required
                id="legoYear"
                label="Year"
                type="number"
                autoComplete="current-password"
                sx={{ width: 320, maxWidth: 345 }}
                onChange={e => {changeValues(e.target.id, e.target.value)}}
              />
              <TextField
                id="legoImage"
                label="Image URL"
                defaultValue=""
                onChange={e => {changeValues(e.target.id, e.target.value)}}
              />
              <TextField
                id="legoDescription"
                label="Description"
                multiline
                maxRows={4}
                onChange={e => {changeValues(e.target.id, e.target.value)}}
              />
            </div>
            <div className='actionButtonContainer'>
              <Button variant="contained" disabled={!enableSubmit} onClick={() => insertLego()}>Submit</Button>
              <Button variant="contained" onClick={cancelForm}>Cancel</Button>
            </div>
          </Box>
          {errorMessage.length > 0 &&
            <h3>Required fields, you didn't completed yet:</h3>
          }
          
          <ul className='danger'>
            {errorMessage && errorMessage.map((oneMessage) => {
              return <li key={oneMessage}>{oneMessage}</li>
            })}
          </ul>
        </Box>

      </Modal>
    </div>
  );
}

export default NewItem;