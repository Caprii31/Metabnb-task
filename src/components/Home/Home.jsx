import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Content from '../Content/Content'
import './index.scss'


function Home() {
  return (
    <div id="home">
        <Navbar />
        <Hero />
        <Content />
    </div>
  )
}

export default Home