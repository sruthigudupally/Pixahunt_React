import React from 'react';
import Navbar from './Navbar.jsx'
import Images from './Images.jsx'
import BackgroundImage from './BackgroundImage.jsx';
import Footer from './Footer.jsx'

function Pixabay(){
  return(
    <div id="parent_img">
      <Navbar/>
      <BackgroundImage/>
      <Images/>
      <Footer/>

    </div>
  )
}
export default Pixabay;