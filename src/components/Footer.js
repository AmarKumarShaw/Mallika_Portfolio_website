import "./Footer.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (

        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="locations">
                        <FaHome size={20} style={{ color: '#fff', marginRight: "2rem" }} />
                        <div>
                            <p>234 Housing society.</p>
                            <p>Bangladesh</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: '#fff', marginRight: "2rem" }} />1-2323-678-34</h4>

                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: '#fff', marginRight: "2rem" }} />info@gmail.com</h4>

                    </div>
                </div>
                <div className="right">
                    <h4>About the Company</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis risus a est fringilla porttitor. Vestibulum fermentum vitae libero sed eleifend. Ut feugiat purus lectus, ac ullamcorper lectus venenatis sit amet. Curabitur non mi eros. Nullam eu sem leo.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: '#fff', marginRight: "1rem" }} />
                        <FaTwitter size={30} style={{ color: '#fff', marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: '#fff', marginRight: "1rem" }} />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer