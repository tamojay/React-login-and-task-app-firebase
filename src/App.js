import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import fire from './components/auth/fire';
import Dashboard from './components/Dashboard';

function App() {

   const [user, setUser] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailError, setEmailError] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [hasAccount, setHasAccount] = useState(false);

   const clearInputs = () => {
      setEmail('');
      setPassword('');
   };
   
   const clearErrors = () => {
      setEmailError('Please enter a valid email');
      setPasswordError('Password should be at least 6 characters');
   };

   const handleLogin = () => {
      fire
         .auth()
         .signInWithEmailAndPassword(email, password)
         .catch((err) => {
            switch (err.code) {
               case "auth/Invalid-email":
               case "auth/User-disabled":
               case "auth/User-not-found":
                  setEmailError(err.message);
                  break;
               case "auth/Wrong-password":
                  setPasswordError(err.message);
                  break;
            };
         });
   };

   const handleSignup = () => {
      fire
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .catch((err) => {
            switch (err.code) {
               case "auth/Email-already-exists":
               case "auth/Invalid-email":
                  setEmailError(err.message);
                  break;
               case "auth/Weak-password":
                  setPasswordError(err.message);
                  break;
            };
         });
   };

   const handleLogout = () => {
      fire.auth().signOut();
   };

   const authListener = () => {
      fire
         .auth()
         .onAuthStateChanged (user => {
            if(user) {
               clearInputs();
               setUser(user);
            }
            else {
               setUser('');
            }
         });
   };

   useEffect(() => {
      authListener();
   });


   return (
      <div className='App'>
        {user ? (
          <Dashboard handleLogout={handleLogout}/>
        ) : (
          <Login 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            emailError={emailError}
            passwordError={passwordError}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
         />
        )}         
      </div>
   )
};

export default App;