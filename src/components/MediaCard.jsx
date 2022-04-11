import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MediaCard = ({id, name, category, year, image}) => {

  const deleteOneLego = async (deleteId) => {
    await fetch(`http://localhost:8080/${deleteId}`, {
      method: 'DELETE',
    });
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
        <Button variant='contained'>Edit</Button>
        <Button id={id} onClick={e => deleteOneLego(e.target.id)} variant='contained'>Delete</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;