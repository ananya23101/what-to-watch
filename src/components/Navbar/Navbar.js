import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return ( 
        <nav className="navbar">
           <Link to = "/"><h1>What To Watch</h1></Link>
            <div className="links">
            <NavLink className={({isActive}) => isActive ? "hell": "non-active-class" } to = "/"> Movies </NavLink>
            <NavLink className={({isActive}) => isActive ? "hell": "non-active-class" } to = "/Series"> Series </NavLink>
            </div>
        </nav>
     );
}

export default Navbar;