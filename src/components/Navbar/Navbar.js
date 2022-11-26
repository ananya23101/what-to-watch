import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>What To Watch</h1>
            <div className="links">
                   <Link to = "/">Movies</Link>
                   <Link to = "/Series">Series</Link>
            </div>
        </nav>
     );
}

export default Navbar;