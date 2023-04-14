import React from 'react'
import Contact from './contact'
import Footer from './footer'
import NavBar from './navBar'
import Service from './service'
import Template from './template'
import Testimonials from './testmonials'

function Home() {
  return (
    <div className=''>
        <NavBar/>
        <Template/>
        <Service/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home