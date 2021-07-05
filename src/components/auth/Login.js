import React from 'react';
import './Login.css';

const Login = (props) => {

   const { 
      email, 
      password, 
      setEmail, 
      setPassword, 
      emailError, 
      passwordError, 
      hasAccount, 
      setHasAccount, 
      handleLogin, 
      handleSignup,
   } = props;

   return (
      
      <section className="login">
         <div className="loginContainer">
            <h2>Task Manager</h2>
            <label>Email/Username</label>
            <input
               type='email'
               autoFocus
               required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input
               type='password'
               required
               value={password}
               minlength='6'
               onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            
            <div className="btnContainer">
               {hasAccount ? (
                  <>
                     <button onClick={handleLogin}>SIGN IN</button>
                     <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>          
                  </>
               ) : (
                  <>
                     <button onClick={handleSignup}>SIGN UP</button>
                     <p>Already have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                  </>
               )}
            </div>
         </div>
      </section>
   )
};

export default Login;
