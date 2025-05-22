import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Second from '../../Components/Second/Second'
import Third from '../../Components/Third/Third'

import './Index.css'

const Index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Second />
      <Third />
      <Footer />
    </div>
  )
}

export default Index
