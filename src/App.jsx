import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import FrontPicture from './components/FrontPicture'
import Cards from './components/Cards'
import TextImage from './components/TextImage'
import ImageArea from './components/ImageArea'
import Carousel from './components/Carousel'
import Categories from './components/Categories'
import Accordion from './components/Accordion'
import Footer from './components/Footer'



const App = () => {
  return (
    <div>
      <Navbar /> 
       <LandingPage />
       <FrontPicture />
       <Cards />
       <TextImage />
       <ImageArea />
       <Carousel />
       <Categories />
       <Accordion />   
      <Footer />
    </div>
  )
}

export default App

