import React, { useState, useEffect } from "react";
import NewItem from "./NewItem";
import MediaCard from './MediaCard';
import ResponsiveAppBar from "./ResponsiveAppBar";
import './legos.css'

const Legos = () => {
    const [legos, setLegos] = useState([]);

    useEffect(() => {
        async function fetchLegos() {
            await fetch('http://localhost:8080')
            .then(res => res.json())
            .then(data => {
                setLegos(data)
            })
            .catch(err => {
                console.log(`Error occured: ${err}`);
            })
        }
        fetchLegos();
    },[]);

    return (
        <>
            <ResponsiveAppBar />
            <NewItem />
            <h1 className="App">Please, view my Legos!</h1>
            <h2 className="App">Total: {legos.length} pieces</h2>
            <div className="legoContainer">
                {legos.map(({...oneLego}) => <MediaCard {...oneLego} key={oneLego.id}/>
                )}
            </div>
        </>
    )
}

export default Legos;
