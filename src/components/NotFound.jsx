import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="App">
            <h1>Sorry...</h1>
            <h2>This page wasn't found!</h2>
            <h2><Link className='link' to='/'>Back to home page...</Link></h2>
        </div>
    )
}

export default NotFound;