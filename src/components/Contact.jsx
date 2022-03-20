import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './contact.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Contacts = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Item>
                            <h1>Üzenjen nekünk!</h1>
                            <Box
                                component="form"
                                sx={{'& > :not(style)': { m: 1, width: '90ch' },}}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="outlined-basic" label="Név" variant="outlined" />
                                <TextField id="filled-basic" label="E-mail cím" variant="outlined" />
                                <TextField id="outlined-multiline-static" label="Üzenet" multiline rows={4} />  
                            </Box>
                            <Button variant="contained">Küldés</Button>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item className="contacts">
                            <h1>Elérhetőségeink</h1>
                            <h2><LocationOnIcon />5665 Pusztaottlaka, Kossuth u. 57.</h2>
                            <h2><AlternateEmailIcon />autoszerviz@varosom.hu</h2>
                            <h2><PhoneIcon />+36-99/123-45-67</h2>
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5488.552081623372!2d21.008225!3d46.542226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474433099e87f2d9%3A0x92c187b6f9c52947!2sPusztaottlaka%2C%20Kossuth%20u.%2057%2C%205665!5e0!3m2!1shu!2shu!4v1647506392451!5m2!1shu!2shu" title="Pusztaottlaka" allowfullscreen="" loading="lazy"></iframe>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Contacts;
