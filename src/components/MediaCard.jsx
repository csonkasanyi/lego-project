import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import legoCategories from './legoCategories';
import { Alert } from '@mui/material';
import { db } from '../firebase-config';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';

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

const MediaCard = ({ id, name, category, year, image, description, documentId, ischanged, stateChanger }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [errorMsg, setErrorMsg] = useState('');

  const updateLegoItem = {
    id,
    name,
    category,
    year,
    image,
    description
  }

  const handleChange = (e) => {
    updateLegoItem.category = e.target.value;
  };

  const gatheringNewLegoInformation = ({ target: { value, id } }) => {
    const mapNameToProperty = {
      legoId: 'id',
      legoName: 'name',
      legoCategory: 'category',
      legoYear: 'year',
      legoDescription: 'descrtiption',
      legoImage: 'image',
    };


    const property = mapNameToProperty[id];

    if (isNaN(value)) {
      updateLegoItem[property] = value;
    } else {
      updateLegoItem[property] = parseInt(value);
    }
  }

const updateProduct = async (updateId) => {
    const productDoc = doc(db, "legos", updateId);
    await updateDoc(productDoc, updateLegoItem);
    stateChanger(ischanged ? false : true);
    handleClose();
  }


const removeProduct = async (deleteId) => {
    const productDoc = doc(db, "legos", deleteId);
    await deleteDoc(productDoc);
    stateChanger(ischanged ? false : true);
  }



  return (
    <Card sx={{ width: 320, maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Kiadás éve: {year}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Kategória: {category}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Azonosító: {id}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Description: {description}
        </Typography>
      </CardContent>
      <CardActions className='actionButtonContainer'>
        <Button variant='contained' onClick={handleOpen}>Edit</Button>
        <Button id={id} onClick={e => removeProduct(documentId)} variant='contained'>Delete</Button>
      </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        onChange={gatheringNewLegoInformation}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit the selected <strong>{id}</strong> lego item!
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
                defaultValue={id}
                required
                id="legoId"
                label="ID"
                type="number"
                placeholder='' /* object propertyje */
                sx={{ width: 250, }}
              />
              <TextField
                defaultValue={name}
                required
                id="legoName"
                label="Name"
              />
              <FormControl sx={{ m: 1, width: 215.833, }}>
                <InputLabel >Category</InputLabel>
                <Select
                  defaultValue={category}
                  id="legoCategory"
                  label="Category"
                  onChange={handleChange}
                >
                  {legoCategories.map((oneCategory) => <MenuItem key={oneCategory} value={oneCategory}>{oneCategory}</MenuItem>)}
                </Select>
              </FormControl>
              <TextField
                required
                defaultValue={year}
                id="legoYear"
                label="Year"
                type="number"
                sx={{ width: 320, maxWidth: 345 }}
              />
              <TextField
                defaultValue={image}
                id="legoImage"
                label="Image URL"
              />
              <TextField
                id="legoDescription"
                label="Description"
                multiline
                maxRows={4}
              />
            </div>
            <CardActions className='actionButtonContainer'>
              <Button variant="contained" onClick={e => updateProduct(documentId)}>Save</Button>
              <Button variant="contained" onClick={handleClose}>Cancel</Button>
            </CardActions>
            {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
          </Box>
        </Box>

      </Modal>
    </Card>
  );
}

export default MediaCard;