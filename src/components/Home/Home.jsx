import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import './index.scss'


function Home() {
  return (
    <div id="home">
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home