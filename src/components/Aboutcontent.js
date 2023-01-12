import "./Aboutcontent.css"

import React from 'react'
import { Link } from "react-router-dom"

const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a react developer.I create responsive secure website for my clients.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src="./Images/course1.jpg" className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src="./Images/laptop2.jpg" className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcontent