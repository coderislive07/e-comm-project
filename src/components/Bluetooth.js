import React from 'react'
import xbox from "../assest/game1.jpg"
import "./BluetoothStyles.css"

function Bluetooth() {
  return (
    <>
      <div className='xbox_container'>
        <div className='container'>
            <div className='xbox_content'>

                <div className='left'>
                    <img src={xbox} alt="hillo" />
                </div>


                <div className='right'>
                    <h1> Xbox One Pro Wireless Controller</h1>
                    <p>Revolution Pro Controller</p>
                    <h2>$97.99</h2>
                    <button className='btn btn-x'>Buy me</button>
                </div>

                
            </div>
        </div>
      </div>
    </>
  )
}

export default Bluetooth;
