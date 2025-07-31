import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Development from './Components/Development/Development'
import Testimonial from './Components/Testimonial/Testimonial'
import Help from './Components/Help/Help'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Development />
      <Testimonial />
      <Help />
      <Footer />
    </div>
  )
}

export default App