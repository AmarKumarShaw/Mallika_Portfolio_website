import React from 'react'
import Navbar from '../components/Navbar'
import Hero2 from '../components/Hero2'
import Footer from '../components/Footer'
import Pricingcard from '../components/Pricingcard'
import Workcard from '../components/Workcard'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="PROJECT." text="Some Of my Most Recent Works."/>
      <Workcard/>
      <Pricingcard/>
      <Footer/>
    </div>
  )
}

export default Project