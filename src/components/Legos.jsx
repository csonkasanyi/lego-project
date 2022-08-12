import React, { useState, useEffect } from "react";
import NewItem from "./NewItem";
import MediaCard from './MediaCard';
import ResponsiveAppBar from "./ResponsiveAppBar";
import './legos.css';
import { db } from "../firebase-config";
import { collection, getDocs } from 'firebase/firestore';

const Legos = () => {
    const [legos, setLegos] = useState([]);
    const [ischanged, setIschanged] = useState(false);

    const legosCollection = collection(db, "legos");

    useEffect(() => {
        const getProducts = async () => {
          const data = await getDocs(legosCollection);
          setLegos(data.docs.map(product => ({...product.data(), id:product.data().id, documentId:product.id})))
        }
    
        getProducts();
      }, [ischanged]);

    return (
        <>
            <ResponsiveAppBar />
            <NewItem stateChanger={setIschanged} ischanged={ischanged}/>
            <h1 className="App">Please, view my Legos!</h1>
            <h2 className="App">Total: {legos.length} pieces</h2>
            <div className="legoContainer">
                {legos.map(({...oneLego}) => <MediaCard {...oneLego} key={oneLego.id} stateChanger={setIschanged} ischanged={ischanged}/>
                )}
            </div>
        </>
    )
}

export default Legos;
