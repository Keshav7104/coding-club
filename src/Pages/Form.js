import React from "react";
import "./Register.css";
const Form = () =>{
    return (
        <>
            <div className="main">  	
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">Register</label>
            <input type="text" name="txt" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Branch" required />
            <input type="password" name="pswd" placeholder="Year" required />
            <input type="password" name="pswd" placeholder="Preferred Language..." required />
            <button>Sign up</button>
          </form>
        </div>
        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email" name="email" placeholder="Login-Id" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <input type="password" name="pswd" placeholder="Confirm Password..." required />
            <button>Login</button>
          </form>
        </div>
      </div>

    </>
    )
}
export default Form;