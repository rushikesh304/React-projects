import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar  ()  {
    return ( 
        <>
        <nav className="navbar">
            <div className="navbar-brand">Beach  Resorts</div>
            
            <NavLink to='/' id='a' className="navbar-item" activeClassName="active">
        Home
      </NavLink>
      <NavLink to='/Room' id='b' className="navbar-item" activeClassName="active">
        Rooms
      </NavLink>
            
            <NavLink to='/Login'>
            <button  className="navbar-login">Login</button>
            </NavLink>
        </nav>
        </>
    );
};

export default Navbar;