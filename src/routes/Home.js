import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Workcard from "../components/Workcard"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Workcard/>
        <Footer/>
    </div>
  )
}

export default Home