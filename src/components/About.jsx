import React from "react";
import Carousel from 'react-material-ui-carousel'
import Paper from '@mui/material/Paper'


const About = () => {

    const items = [
        {
            name: "Kék versenyautó",
            description: "Az autón kívül 4 bólyát tartalmaz",
            url: 'https://www.lego.com/cdn/product-assets/product.img.pri/31027_Prod.jpg'
        },
        {
            name: "Óceáni kutató tengeralattjáró",
            description: "2020-as modell",
            url: 'https://www.lego.com/cdn/product-assets/product.img.pri/60264_Prod.jpg'
        }
    ]

    return (
        <>
            <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
        </>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img src={props.item.url} alt={props.item.name} />
        </Paper>
    )
}

export default About;
