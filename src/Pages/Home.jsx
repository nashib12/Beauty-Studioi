import React from 'react'
import Hero from '../Components/Home/Hero'
import About from '../Components/Home/About'
import Service from '../Components/Home/Service'
import Practices from '../Components/Home/Practices'
import Testimonial from '../Components/Home/Testimonial'
import Prices from '../Components/Home/Prices'
import Video from '../Components/Home/Video'
import Team from '../Components/Home/Team'
import Contact from '../Components/Home/Contact'
import News from '../Components/Home/News'

const Home = () => {
  return (
    <>
     <Hero /> 
     <About />
     <Service />
     <Practices />
     <Testimonial />
     <Prices />
     <Video />
     <Team />
     <Contact/>
     <News />
    </>
  )
}

export default Home
