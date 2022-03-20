import React, { useState } from "react";
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import './legos.css'

 
const Legos = () => {

    const [legos, setLegos] = useState([]);

    const fetchLegos = async () => {
        await fetch('http://localhost:8080')
        .then((result) => result.json())
        .then((data) => setLegos(data))
        .then(console.log(legos))
        .catch(err => {
            console.log(`Error occured: ${err}`);
        })
    }

    const rows = legos.map(oneLego => (
            { id: oneLego.id, name: oneLego.name, category: oneLego.category, year: oneLego.year }
        ));
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'category', headerName: 'Category', width: 150 },
        { field: 'year', headerName: 'Year', width: 150 },
      ];
      

    return (
        <>
            <Button variant="contained" onClick={fetchLegos}>Betöltés</Button>
            <div className="tableContainer">
                <div style={{ width: '60%' }} className='legoTable'>
                    <DataGrid rows={rows} columns={columns} autoHeight={true} />
                </div>
            </div>          
        </>
    )
}

export default Legos;
