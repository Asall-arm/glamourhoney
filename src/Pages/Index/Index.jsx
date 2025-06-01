import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Collection from '../../Components/Collection/Collection'
import WeeklyCollection from '../../Components/WeeklyCollection/WeeklyCollection'

import './Index.css'
import Testimonials from '../../Components/Testimonials/Testimonials'

const Index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Collection />
      <WeeklyCollection />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Index
