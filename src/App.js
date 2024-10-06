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
import Loginpage from './pages/Loginpage.jsx'
import Registrationpage from './pages/Registrationpage.jsx'
import Error from './pages/Errorpage.jsx'
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
      <Route path="*" element={<Error/>}/>
          {/*<Route path="/goa" element={<Goa/>}></Route>
           <Route path="/perth" element={<PerthbyGoa/>}></Route> */}
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}
