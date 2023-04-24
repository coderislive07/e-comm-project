import React from 'react'
import './Successpage.css'
import {MdOutlineDone} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
   const navigate = useNavigate(); 
  return (
    <div className='successpage-container'>
      <div className="success-content">
        <div className="success-icon">
            <MdOutlineDone/>
        </div>
        <h1>PAYMENT SUCCESSFUL</h1>
        <p>We Received Your Purchese Request;<br/>we'll be in touch shortly!</p>
        <div>
            <button onClick={() => {navigate("/");}} className='get-home'>Get Back To Our Home Page</button>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage
