import "./Hero.css"
import React from 'react'
 import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="into-img" src="./Images/laptop3.jpg" alt="images" />
        </div>
        <div className="content">
          <p>Hello! I'M A FREELANCER</p>
          <h1>React Devoloper</h1>
          <div>
            <Link to="Project" className="btn">Projects</Link>
            <Link to="Contact" className="btn btn-light">contact</Link>

          </div>
        </div>
    </div>
  )
}

export default Hero