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

const inputFieldWith = {
  width: [250, 450, 220],
  color: 'yellow',
}

const newLegoButtonStyle = {
  position: 'fixed',
  bottom: "20px",
  right: "20px",
  width: '300px',
  "z-index": 1,
}

const NewItem = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
      console.log(e.target.value);
    setValue(e.target.value);
  };

  const submitForm = (e) => {
      console.log(e.target);
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
                        id="outlined-number"
                        label="ID"
                        type="number"
                        sx={{ width: 250,}}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        defaultValue=""
                    />
                    <FormControl sx={{ m: 1, width: 215.833,}}>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
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
                        id="outlined-password-input"
                        label="Year"
                        type="number"
                        autoComplete="current-password"
                        sx={{ width: 320, maxWidth: 345 }}
                    />
                    <TextField
                        id="outlined-helperText"
                        label="Image URL"
                        defaultValue=""
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                    />
                </div>
                
                <Button variant="contained" onClick={(e) => submitForm(e)}>Submit</Button>
                </Box>
            
        </Box>
      </Modal>
    </div>
  );
}


export default NewItem;