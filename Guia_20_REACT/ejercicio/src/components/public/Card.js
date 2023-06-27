import React from 'react'
import { useState } from 'react';

const Card = ({ mascota }) => {

    const [click, setClick] = useState(0);

    const handleClicks = () => {
        setClick(click + 1);
    }
    return (
        <div className="col" >
            <div className="card shadow-sm">
                <img onClick={handleClicks} src={mascota.image} className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary" >Me gusta: {click}</small>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card