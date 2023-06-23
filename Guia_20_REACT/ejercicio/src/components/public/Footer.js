import React from 'react'
import { Link } from 'react-router-dom';


export const Footer = () => {
    return (

        <div className="container">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div className="col mb-3">
                    <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <img src="pac-man.png" className="App-logo" width="30" href="#bootstrap"></img>
                        <a className="text-body-secondary" >&copy; 2023</a>

                    </a>
                </div>

                <div className="col mb-3">

                </div>

                <div className="col mb-3">
                    <h5>Social Media</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Facebok</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Twitter</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Instagram</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Tik Tok</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">You Tube</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Pac Man</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Log in</a></li>
                        <li className="nav-item mb-2"><Link to={"/user-form"} className="nav-link p-0 text-body-secondary">Sign up</Link></li>

                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Community</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Issues</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Discussions</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Corporate sponsors</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Open Collective</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Stack Overflow</a></li>
                    </ul>
                </div>
            </footer>
        </div>

    )
}

export default Footer
