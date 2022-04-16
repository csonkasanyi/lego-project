import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NewItem from "./NewItem";
import MediaCard from './MediaCard';
import './legos.css'

 


const Legos = () => {

    const [legos, setLegos] = useState([]);

    const fetchLegos = async () => {
        await fetch('http://localhost:8080')
        .then((result) => result.json())
        .then((data) => setLegos(data))
        .catch(err => {
            console.log(`Error occured: ${err}`);
        })
    }

    useEffect(() => {
        fetchLegos()
    }, [])

    

    return (
        <>
            <NewItem />
            <h1 className="App">Kérem, tekintse meg Legóinkat!</h1>
            <h2 className="App">Összesen: {legos.length} db</h2>
            <div className="legoContainer">
                {legos.map((oneLego) => {
                    return (
                        <MediaCard key={oneLego.id} image={oneLego.image} name={oneLego.name} year={oneLego.year} category={oneLego.category} id={oneLego.id}/>
                    )
                })}
            </div>
        </>
    )
}

export default Legos;
