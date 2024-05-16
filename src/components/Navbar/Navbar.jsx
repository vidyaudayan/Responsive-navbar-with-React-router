import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import menuicon from '../../assets/menu.png'


function Navbar() {
const [menuOpen, setMenuOpen]= useState(false)

  return (
    <div className='navbar'>
        <div className='logo'>
        <h1>BNN</h1>
        </div>
     <div className='menu'>
<img onClick={()=>{setMenuOpen(!menuOpen)}} src={menuicon} alt="" />
     </div>
     
        <div className={`navlinks ${menuOpen ? 'open' : ''}`} >
          
           <Link className='link' to='/home'>Home</Link>
            <Link className='link' to='/destination'>Destinations</Link>
          
            <Link className='link' to='/activities'>Activities</Link>

         
        </div>

    </div>
  )
}

export default Navbar