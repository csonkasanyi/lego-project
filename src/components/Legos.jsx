import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import NewItem from "./NewItem";
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

    const rows = legos.map(oneLego => (
            {
                id: oneLego.id,
                name: oneLego.name,
                category: oneLego.category,
                year: oneLego.year}
        ));
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'category', headerName: 'Category', width: 150 },
        { field: 'year', headerName: 'Year', width: 100 },
        { field: 'delete', headerName: 'Delete', width: 100}
      ];
      

    return (
        <>
            <NewItem />
            <h1>Kérem, tekintse meg Legóinkat!</h1>
            <div className="tableContainer">
                <div style={{ width: '80%' }} className='legoTable'>
                    <DataGrid rows={rows} columns={columns} autoHeight={true} />
                </div>
            </div>          
        </>
    )
}

export default Legos;
