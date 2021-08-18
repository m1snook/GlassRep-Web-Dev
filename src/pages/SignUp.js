import React, {useRef, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import "../sass/auth.css"

const SignUp = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signUp} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault();
    if(passwordRef.current.value === passwordConfirmRef.current.value) {
      setError("");
      try {
        setLoading(true);
        await signUp(emailRef.current.value, passwordRef.current.value);
        history.replace("/")
      } catch(e){
        console.log(e);
        setError("Could not create account");
      } finally{
        setLoading(false);
      }
    }
    else {
      setError("Passwords do not match");
      setLoading(false)
    }
  }
  return (
    <div className="auth">
       <div id="login-box">
        <div className="left">
          <form onSubmit={handleSubmit}>
            <h1>Sign up</h1>
            <input type="text" name="username" placeholder="Username" />
            <input ref={emailRef} type="text" name="email" placeholder="E-mail" />
            <input ref={passwordRef}type="password" name="password" placeholder="Password" />
            <input ref={passwordConfirmRef}type="password" name="password2" placeholder="Retype password" />
            
            <input type="submit" name="signup_submit" value="Sign Up" disabled={loading}/>
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

export default SignUp;