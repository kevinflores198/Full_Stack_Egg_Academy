import React from 'react'
import { useState } from 'react';

const Card = ({ mascota }) => {

    //hacemos el hook como boolean para que cambie cuando hacemos el if en el boton
    const [meGusta, setMeGusta] = useState(false);

    const handleClicks = () => {
        setMeGusta(!meGusta);
    }
    return (
        <div className="col" >
            <div className="card shadow-sm">
                <img onClick={handleClicks} src={mascota.image} className={meGusta ? "bd-placeholder-img card-img-top" : "bd-placeholder-img card-img-top"} width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                        <button onClick={handleClicks} type="button" className={meGusta ? "btn btn-sm btn-danger" : "btn btn-sm btn-primary"}>Me gusta </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
