import React from 'react';
import heroimg from '../../assets/hero.jpg'
import './Home.css'

function Home() {
  return (
    <div className='homesec'>
        <img className='homeimg' src={heroimg} alt="" />
    </div>
  )
}

export default Home