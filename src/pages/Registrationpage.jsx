import React from 'react';

function Registrationpage(){
    return(
        <>
       
       <div className="login-container">
    <div className="login-box">
      <div className="tabs">
        <button className="active">Register</button>
        <button>Join</button>
      </div>

     

      <form className="login-form">
        <div className="input-group">
          <input type="text" placeholder="Username or email" required class="i" id="username"/>
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" required className="i" id="password"/>
        </div>
        <button type="submit" className="login-btn" onClick={storing}>Log in</button>
        {/* <a href="#" class="forgot-password">Reset your password</a> */}
      </form>
    </div>
  </div>

      

        </>
    )
    function storing(){
     
      let user=document.getElementById("username").value;
      let password=document.getElementById("password").value;
      window.localStorage.setItem("UserName",user);
      window.localStorage.setItem("Password",password);
    
   }
}
export default Registrationpage;