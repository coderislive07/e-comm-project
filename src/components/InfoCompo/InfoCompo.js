import React from 'react'
import gamehead from "../../assest/gaming headphone.jpg"
import "./InfoCompo.css"
const InfoCompo = () => {
  return (
    <div className='info-comp'>
        <div className="containers">
            <div className="info-container">
                <div className="in-left">
                    <img src={gamehead} alt=""  />
                </div>
                <div className="in-right">
                    <h1>Gamers Are Everywhere!!!</h1>
                    <h4>If you want to achive a goals in gaming find your best equipments here. A gamer is a proactive hobbyist who plays interactive games, and who plays for usually long periods of time, this website would full fill all over dreams of having a good game pc and equipments.</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCompo
