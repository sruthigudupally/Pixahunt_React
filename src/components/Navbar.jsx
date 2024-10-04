import React from 'react';
// import Button1 from './allbutton/Button1.jsx';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <div id="navbar">
            <span id="pixabay">PixoHunt</span>
            <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3m49xsTfOV0V4RfSMjjtmkW87Bv4az8mLQ&s" alt=""  id="mainimg"/></span>
            <span className="two" id="twoid" >Home</span>
                <Link to={"/login"}>
                <button className="two buttt" id="login">Login </button>
                </Link>

                
                <Link to="/register"> 
                <button id="but"  className="butt buttt">Register</button>
                </Link>
                
                <button className="butt buttt" id="buttt">Download</button>

        </div>
    )
}
export default Navbar;