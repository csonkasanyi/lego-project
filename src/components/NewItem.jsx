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
import { width } from '@mui/system';
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

const newLegoItem = {}

const NewItem = () => {
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
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value)
    newLegoItem["category"] = e.target.value;
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
    newLegoItem[property] = value
    } else {
    newLegoItem[property] = parseInt(value);
    }

  if (newLegoItem.id) {
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
  if (newLegoItem.name) {
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
  if (newLegoItem.category) {
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
  if (newLegoItem.year && newLegoItem.year > 1931) {
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
   console.log(newLegoItem);

}

  const submitForm = async () => {
    console.log(newLegoItem);
    await fetch('http://localhost:8080/new-lego', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newLegoItem),
      })
      .then(response => {
        if (response.status === 200) {
          handleClose();
          /*  return response.json(); */
          } else {
            setErrorMsg('A lego nem lett felvéve!');
            }
        })
      .catch((error) => {
          console.log('Error:', error);
        });
}

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleOpen} sx={newLegoButtonStyle}>Add new lego</Button>
      <Modal
        open={open}
        onClose={handleClose}
        onChange={gatheringNewLegoInformation}
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
                placeholder='' /* object propertyje */
                sx={{ width: 250, }}
              />
              <TextField
                required
                id="legoName"
                label="Name"
                defaultValue=""
              />
              <FormControl sx={{ m: 1, width: 215.833, }}>
                <InputLabel >Category</InputLabel>
                <Select
                  labelId="legoCategory"
                  id="legoCategory"
                  value = {value}
                  label="Category"
                  onChange={handleChange}
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
                required
                id="legoYear"
                label="Year"
                type="number"
                autoComplete="current-password"
                sx={{ width: 320, maxWidth: 345 }}
              />
              <TextField
                id="legoImage"
                label="Image URL"
                defaultValue=""
              />
              <TextField
                id="legoDescription"
                label="Description"
                multiline
                maxRows={4}
              />
            </div>

            <Button variant="contained" disabled={!enableSubmit} onClick={submitForm}>Submit</Button>
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
    </div>
  );
}


export default NewItem;