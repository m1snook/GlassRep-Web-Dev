import React, {useRef, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import "../sass/auth.css"

const SignIn = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {signIn} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      await signIn(emailRef.current.value, passwordRef.current.value);
      history.replace("/")
    } catch(e){
      console.log(e);
      setError("Login Error");

    } finally{
      setLoading(false);
    }
  }
  return (
    <div className="auth">
       <div id="login-box">
        <div className="left">
          <form onSubmit={handleSubmit}>
            <h1>Log In</h1>
            <input type="text" name="username" placeholder="Username" />
            <input ref={emailRef} type="text" name="email" placeholder="E-mail" />
            <input ref={passwordRef}type="password" name="password" placeholder="Password" />
            
            <input type="submit" name="signup_submit" value="Log In" disabled={loading}/>
            <div>{error}</div>
          </form>
        </div>
        
        <div className="right">
          <span style={{color: "black" }} className="loginwith">Sign in with<br/>Google</span>
          
         {/* <button className="social-signin facebook"></button>
          <button className="social-signin twitter"></button>*/}
          <button className="social-signin google">Log in with Google</button>
        </div>
        <div className="or">OR</div>
      </div>
    </div>
    
  );
}

export default SignIn;