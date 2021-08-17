import React, {useContext, useEffect, useState} from 'react'
import {auth} from '../auth/firebase';
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

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false)
    })
    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    signUp
  };
  return (
    <AuthContext.Provider value={value}>
      {loading && "Loading"}
      {!loading && children}
    </AuthContext.Provider>
  )
}