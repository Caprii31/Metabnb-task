import React from 'react'
import contentImg1 from '../../assets/images/content/main1.png'
import contentImg2 from '../../assets/images/content/main2.png'
import contentImg3 from '../../assets/images/content/main3.png'
import contentImg4 from '../../assets/images/content/main4.png'
import contentImg5 from '../../assets/images/content/main5.png'
import contentImg6 from '../../assets/images/content/main6.png'
import contentImg7 from '../../assets/images/content/main7.png'
import contentImg8 from '../../assets/images/content/main8.png'
import dog from '../../assets/images/content/dog.png'
import star from '../../assets/images/content/Star 2.png'
import ship from '../../assets/images/content/ship.png'
import coin from '../../assets/images/content/coin.png'
import './index.scss'
import Card from '../Card/Card'

function Content() {

    const images = [contentImg1, contentImg2, contentImg3, contentImg4, contentImg5, contentImg6, contentImg7, contentImg8]
  return (
    <section id="content">
        <div id="content__header">
            <div className="content__header--item">
                <img src={coin} alt="" />
                <h1>MBToken</h1>
            </div>
            <div className="content__header--item">
                <img src={dog} alt="" />
                <h1>METAMASK</h1>
            </div>
            <div className="content__header--item">
                <img src={ship} alt="" />
                <h1>OpenSea</h1>
            </div>
        </div>
        <section id="cards__container">
          <h1>Inspiration for your next adventure</h1>
          <div className="cards__container--list">
            {images.map((img, index) => (
                <Card img={img} key={index} />
            ))}
          </div>
        </section>
    </section>
  )
}

export default Content