import React from 'react'
import cool from '../../assest/baby.png'
import './MoreInfo.css'
import {BsRecycle} from 'react-icons/bs'
import {TbRainbow} from 'react-icons/tb'
import {SlEarphones} from 'react-icons/sl'
const MoreInfo = () => {
  return (
    <div className='moreinfo'>
      <div className="moreinfo-container">
        <div className="info-left">
            <h2>WHY CUSTOM IS BETTER</h2>
            <div className="info-content">
                <span className="info-icon">  <BsRecycle/>     </span>
                <div className="contents">
                    <h3>COMFORT</h3>
                    <p>Our earpieces easily form to the natural contours of your ear. This results in a perfect fit made just for you.</p>
                </div>
            </div>
            <div className="info-content">
                <span className="info-icon">   <TbRainbow/>    </span>
                <div className="contents">
                    <h3>ISOLATION</h3>
                    <p>Decibuliz earplugs are related for up to 31 NRR. That's one of the highest levels of hearing protection on the market.</p>
                </div>
            </div>
            <div className="info-content">
                <span className="info-icon"><SlEarphones/>   </span>
                <div className="contents">
                    <h3>SECURE</h3>
                    <p>Thanks to their ability to create a secure, sung fit, Decibuliz earpieces will stay in place when you're on the movie.</p>
                </div>
            </div>
        </div>
        <div className="info-right">
            <div className="info-images">
                <img src={cool} alt="coolimage" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo
