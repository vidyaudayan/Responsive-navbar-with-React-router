import React from 'react'
import destimg from '../../assets/destination.jpg'
import './Destination.css'

function Destination() {
  return (
    <div className='destsec'>
        <img className='destimg' src={destimg} alt="" />
    </div>
  )
}

export default Destination