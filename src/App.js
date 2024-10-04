// import React from 'react';
// import Navbar from './components/Navbar.jsx'
// import Images from './components/Images.jsx'
// import BackgroundImage from './components/BackgroundImage.jsx';

// function App(){
//   return(
//     <div id="parent_img">
//       <Navbar/>
//       <BackgroundImage/>
      
//     <Images/>
//     </div>
//   )
// }
import React from 'react';
import './style.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Pixabay from './components/Pixabay.jsx';
import './App.css';
import Loginpage from '../src/components/pages/Loginpage.jsx'
import Registrationpage from '../src/components/pages/Registrationpage.jsx'
export default class App extends React.Component{
  constructor(props){
    super(props)
    console.log(props);
    
  }
  render(){
    return(
      <>
        <BrowserRouter>
      <Routes>
      <Route path="/" element={<Pixabay/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/register"   element={<Registrationpage/>}/>
          {/*<Route path="/goa" element={<Goa/>}></Route>
           <Route path="/perth" element={<PerthbyGoa/>}></Route> */}
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}
