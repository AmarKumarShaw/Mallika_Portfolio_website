import "./Navbar.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor]= useState(false);
    const changeColor = () =>{
        if(window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);
    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <div className={click ? "nav-menu active":"nav-menu"}>
                <ul className="nav-menu-ui">
                    <li className="nav-menu-li">
                        <Link to="/">Home</Link>
                    </li>
                {/* </ul> */}
                {/* <ul> */}
                    <li className="nav-ui-pro">
                        <Link to="/project">Project</Link>
                    </li>
                {/* </ul> */}
                {/* <ul> */}
                    <li className="nav-ui-abu">
                        <Link to="/About">About</Link>
                    </li>
                {/* </ul> */}
                {/* <ul> */}
                    <li className="nav-ui-con">
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="hamburger" onClick= {handleClick}>
                {click ? (<FaTimes size={20} style= {{color : "#fff"}}/>) 
                : (<FaBars size={20} style={{color:"#fff"}}/>) }
                {/* <FaTimes size={20} style={{ color: "#fff" }} />
                <FaBars size={20} style={{ color: "#fff" }} /> */}
            </div>

        </div>
    )
}

export default Navbar