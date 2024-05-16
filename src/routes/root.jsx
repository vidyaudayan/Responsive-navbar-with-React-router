import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'


function Root() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
       <footer></footer>
    </div>
  )
}

export default Root