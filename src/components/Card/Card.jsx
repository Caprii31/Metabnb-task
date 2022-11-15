import React from 'react'
import star from '../../assets/images/content/Star 2.png'
import './card.scss'
function Card({ img }) {
  return (
    <div id="card">
        <img src={img} alt="" />
        <div id="card__text">
          <div id="card__text--left">
            <p>desert king</p>
            <p>234km away</p>
            <div id="card__text--left--stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
          <div id="card__text--right">
            <h3>1mbt per night</h3>
            <p>available for 2weeks stay</p>
          </div>
        </div>
    </div>
  )
}

export default Card