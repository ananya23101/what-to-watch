import React from "react";
import { Link, NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import './Navbar.css';
import { MobileView, BrowserView } from "react-device-detect";
const Navbar = () => {
    return ( 
        <>
       <BrowserView>
       <nav className="navbar">
           <Link to = "/"><h1>What To Watch</h1></Link>
            <div className="links">
            <NavLink className={({isActive}) => isActive ? "hell": "non-active-class" } to = "/"> Movies </NavLink>
            <NavLink className={({isActive}) => isActive ? "hell": "non-active-class" } to = "/Series"> Series </NavLink>
            <NavLink className={({isActive}) => isActive ? "hell": "non-active-class" } to = "/Saved"> Saved </NavLink>
            </div>
        </nav>
       </BrowserView>
        <MobileView>
        <nav className="navbar">
           <Link to = "/"><h1>What To Watch</h1></Link>
            <div className="links">
            <Menu right >
            <NavLink className={({isActive}) => isActive ? "hell": "non-active-class" } to = "/"> Movies </NavLink>
            <NavLink className={({isActive}) => isActive ? "hell": "non-active-class" } to = "/Series"> Series </NavLink>
            <NavLink className={({isActive}) => isActive ? "hell": "non-active-class" } to = "/Saved"> Saved </NavLink>
            </Menu>
            </div>
        </nav>
        </MobileView>
        </>
     );
}

export default Navbar;