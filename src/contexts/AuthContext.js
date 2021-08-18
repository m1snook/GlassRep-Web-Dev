import React, {useContext, useEffect, useState} from 'react'
import {auth} from '../auth/firebase';
import axios from 'axios';

const AuthContext = React.createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}){
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  function signUp(email, password){
    return auth.createUserWithEmailAndPassword(email , password);
  }

  function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // get the id token of the current user and send it to backend
  function sendIdToken() {
    auth.currentUser.getIdToken(true)
      .then(idToken => {
        axios.post('/api/users', {}, { 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`
          }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      
      })
      .catch(err => console.log(err));
  }

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false)
    })
    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    signUp,
    signIn
  };
  return (
    <AuthContext.Provider value={value}>
      {loading && "Loading"}
      {!loading && children}
    </AuthContext.Provider>
  )
}