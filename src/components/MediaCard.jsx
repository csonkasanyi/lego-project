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

import { Alert } from '@mui/material';
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


const MediaCard = ({id, name, category, year, image}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [errorMessage, setErrorMessage] = useState([
    'ID is required',
    'Name is required',
    'Category is required',
    'Year is required',
    ]);
  const [enableSubmit, setEnableSubmit] = useState(true);
  
  const updateLegoItem = {
    id: {id},
    name: {name},
    category: {category},
    year: {year},
    image: {image},
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value)
    updateLegoItem["category"] = e.target.value;
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
    updateLegoItem[property] = value
    } else {
    updateLegoItem[property] = parseInt(value);
    }

  if (updateLegoItem.id) {
    const tempErrorMessageArray = [...errorMessage];
    const index = errorMessage.indexOf('ID is required');
    console.log(index);
    if (index !== -1) {
      tempErrorMessageArray.splice(index, 1);
      setErrorMessage(tempErrorMessageArray);
    }
  } else {
    const tempErrorMessageArray = [...errorMessage];
    const index = errorMessage.indexOf('ID is required');
    console.log(index);
    if (index === -1) {
      tempErrorMessageArray.push('ID is required');
      setErrorMessage(tempErrorMessageArray);
  }}
  if (updateLegoItem.name) {
    const tempErrorMessageArray = [...errorMessage];
    const index = errorMessage.indexOf('Name is required');
    console.log(index);
    if (index !== -1) {
      tempErrorMessageArray.splice(index, 1);
      setErrorMessage(tempErrorMessageArray);
    }
  } else {
    const tempErrorMessageArray = [...errorMessage];
    const index = errorMessage.indexOf('Name is required');
    console.log(index);
    if (index === -1) {
      tempErrorMessageArray.push('Name is required');
      setErrorMessage(tempErrorMessageArray);
  }}
  if (updateLegoItem.category) {
    const tempErrorMessageArray = [...errorMessage];
    const index = errorMessage.indexOf('Category is required');
    console.log(index);
    if (index !== -1) {
      tempErrorMessageArray.splice(index, 1);
      setErrorMessage(tempErrorMessageArray);
    }
  } else {
    const tempErrorMessageArray = [...errorMessage];
    const index = errorMessage.indexOf('Category is required');
    console.log(index);
    if (index === -1) {
      tempErrorMessageArray.push('Category is required');
      setErrorMessage(tempErrorMessageArray);
  }}
  if (updateLegoItem.year && updateLegoItem.year > 1931) {
    const tempErrorMessageArray = [...errorMessage];
    const index = errorMessage.indexOf('Year is required');
    console.log(index);
    if (index !== -1) {
      tempErrorMessageArray.splice(index, 1);
      setErrorMessage(tempErrorMessageArray);
    }
  } else {
    const tempErrorMessageArray = [...errorMessage];
    const index = errorMessage.indexOf('Year is required');
    console.log(index);
    if (index === -1) {
      tempErrorMessageArray.push('Year is required');
      setErrorMessage(tempErrorMessageArray);
  }}
  console.log(errorMessage);

  if (errorMessage.length === 0) {
    setEnableSubmit(true);
   }
   console.log(updateLegoItem);

}

  const saveForm = async (id) => {
    console.log(updateLegoItem);
    await fetch(`http://localhost:8080/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateLegoItem),
      })
      .then(response => {
        if (response.status === 200) {
          handleClose();
          /*  return response.json(); */
          } else {
            setErrorMsg('A lego nem lett frissítve!');
            }
        })
      .catch((error) => {
          console.log('Error:', error);
        });
}
  const deleteOneLego = async (deleteId) => {
    await fetch(`http://localhost:8080/${deleteId}`, {
      method: 'DELETE',
    });
  }

  const editOneLego = (name, id, year, category) => {
    console.log(name, id, year, category);
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
      </CardContent>
      <CardActions className='actionButtonContainer'>
        <Button variant='contained' onClick={handleOpen}>Edit</Button>
        <Button id={id} onClick={e => deleteOneLego(e.target.id)} variant='contained'>Delete</Button>
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
            required
            id="legoId"
            label="ID"
            type="number"
            placeholder={id} /* object propertyje */
            sx={{ width: 250, }}
          />
          <TextField
            placeholder={name}
            required
            id="legoName"
            label="Name"
          />
          <FormControl sx={{ m: 1, width: 215.833, }}>
            <InputLabel >Category</InputLabel>
            <Select
              placeholder={category}
              id="legoCategory"
              label="Category"
              onChange={handleChange}
              value={value}
            >
              <MenuItem value={'City'}>City</MenuItem>
              <MenuItem value={'Creator'}>Creator</MenuItem>
              <MenuItem value={'Star Wars'}>Star Wars</MenuItem>
              <MenuItem value={'Chima'}>Chima</MenuItem>
              <MenuItem value={'Ferrari'}>Ferrari</MenuItem>
              <MenuItem value={'Bionicle'}>Bionicle</MenuItem>
              <MenuItem value={'Promo'}>Promo</MenuItem>
              <MenuItem value={'Dots'}>Dots</MenuItem>
              <MenuItem value={'Mixels'}>Mixels</MenuItem>
            </Select>
          </FormControl>
          <TextField
            placeholder={year}
            required
            id="legoYear"
            label="Year"
            type="number"
            autoComplete="current-password"
            sx={{ width: 320, maxWidth: 345 }}
          />
          <TextField
            placeholder={image}
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

        <Button variant="contained" disabled={!enableSubmit} onClick={e => saveForm(id)}>Save</Button>
        {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
      </Box>
      <h3>Required fields, you didn't completed yet:</h3>
      <ul className='danger'>
        {errorMessage && errorMessage.map((oneMessage) => {
          return <li key={oneMessage}>{oneMessage}</li>
        })}
      </ul>
    </Box>

  </Modal>
    </Card>

  );
}

export default MediaCard;