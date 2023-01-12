import "./Workcard.css"
import React from 'react'
import { NavLink } from "react-router-dom"


const Workcard = () => {
    return (
        <div className="work-container">
            <h1 className="Project-heading">
                Projects
            </h1>
            <div className="project-container">
                <div className="project-card">
                    <img src="./Images/laptop.jpg" alt="" />
                    <h2 className="project-title">LMS/Course Website Design</h2>
                    <div className="pro-details">
                        <p>Donec vitae consequat risus. Nunc vel congue felis. Nam maximus orci nec urna mollis dictum. Sed consequat nulla et euismod tempus. In in nulla eu urna dictum condimentum. Aliquam vel mattis est. Vestibulum ac iaculis leo. Nulla quam lorem, lacinia eu egestas ac, facilisis vitae nibh.

</p>
                        <div className="pro-btns">
                            <NavLink to="url.com" className='btn'>View</NavLink>
                            <NavLink to="url.com" className='btn'>Source</NavLink>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src="./Images/laptop2.jpg" alt="" />
                    <h2 className="project-title">RYMO Ecommerce design</h2>
                    <div className="pro-details">
                        <p>Donec vitae consequat risus. Nunc vel congue felis. Nam maximus orci nec urna mollis dictum. Sed consequat nulla et euismod tempus. In in nulla eu urna dictum condimentum. Aliquam vel mattis est. Vestibulum ac iaculis leo. Nulla quam lorem, lacinia eu egestas ac, facilisis vitae nibh.

</p>
                        <div className="pro-btns">
                            <NavLink to="url.com" className='btn'>View</NavLink>
                            <NavLink to="url.com" className='btn'>Source</NavLink>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src="./Images/course1.jpg" alt="" />
                    <h2 className="project-title">Ecommerce Website Design</h2>
                    <div className="pro-details">
                        <p>Donec vitae consequat risus. Nunc vel congue felis. Nam maximus orci nec urna mollis dictum. Sed consequat nulla et euismod tempus. In in nulla eu urna dictum condimentum. Aliquam vel mattis est. Vestibulum ac iaculis leo. Nulla quam lorem, lacinia eu egestas ac, facilisis vitae nibh.

                        </p>
                        <div className="pro-btns">
                            <NavLink to="url.com" className='btn'>View</NavLink>
                            <NavLink to="url.com" className='btn'>Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workcard