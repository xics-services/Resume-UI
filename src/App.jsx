import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import FrontPicture from './components/FrontPicture'
import Cards from './components/Cards'
import TextImage from './components/TextImage'
import ImageArea from './components/ImageArea'
import ImageSlider from './components/ImageSlider'
import Categories from './components/Categories'
import Accordion from './components/Accordion'
import Footer from './components/Footer'
import Login from './authentication/Login'
import Register from './authentication/Register'



const App = () => {
  return (
    <div>
      <Navbar /> 
       <LandingPage />
       <FrontPicture />
       <Cards />
       <TextImage />
       <ImageArea />
       <ImageSlider />
       <Categories />
       <Accordion />   
      <Footer />
    </div>
  )
}

export default App;

