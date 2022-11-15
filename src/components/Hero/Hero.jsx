import React from 'react'
import './index.scss'
import heroImg1 from '../../assets/images/hero1.png'
import heroImg2 from '../../assets/images/hero2.png'
import heroImg3 from '../../assets/images/hero3.png'
import heroImg4 from '../../assets/images/hero4.png'

function Hero() {
  return (
    <section id="hero">
        <section id="hero__text">
            <h1 id="hero__text--header">rent a <span>place</span> away from <span>home</span> in the <span>metaverse</span></h1>
            <p id="hero__text--par">we provide you access to luxury and affordable houses <br /> in the metaverse, get a chance to turn your <br /> imagination to reality at your comfort zone</p>
            <div id="hero__text--search">
                <input type="text" placeholder="Search"/>
                <button className="hero__text--search--btn btn">search</button>
            </div>
        </section>
        <section id="hero__images">
            <img src={heroImg1} alt="" className="hero__images--img" />
            <img src={heroImg2} alt="" className="hero__images--img" />
            <img src={heroImg3} alt="" className="hero__images--img" />
            <img src={heroImg4} alt="" className="hero__images--img" />
        </section>
        
    </section>
  )
}

export default Hero