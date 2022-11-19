import React from "react";
import './Navbar.css';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>What To Watch</h1>
            <div className="links">
                   <a href="/">Movies</a>
                   <a href="/">Series</a>
            </div>
        </nav>
     );
}

export default Navbar;