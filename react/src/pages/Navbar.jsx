import React from 'react';
import { NavLink } from 'react-router-dom'
const Navbar = () => {
   
  return (
    <div>
        <nav>
            <NavLink className={(e)=>{return e.isActive ? "red" :  ""}} to="/home"><li>HOME</li></NavLink>
            <NavLink className={(e)=>{return e.isActive ? "red" :  ""}} to="/contact"><li>CONTACT</li></NavLink>
            <NavLink className={(e)=>{return e.isActive ? "red" :  ""}} to="/login"><li>LOGIN</li></NavLink>
            <NavLink className={(e)=>{return e.isActive ? "red" :  ""}} to="/about"><li>ABOUT</li></NavLink>
            
        </nav>
      
    </div>
  )
}

export default Navbar;
