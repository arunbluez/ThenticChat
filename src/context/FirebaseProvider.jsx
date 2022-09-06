import React, { createContext, useState } from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

firebase.initializeApp({
  apiKey: "AIzaSyC9PENEfw55brZ7uEz-3idWI8a8eQPQuag",
  authDomain: "thenticchat.firebaseapp.com",
  projectId: "thenticchat",
  storageBucket: "thenticchat.appspot.com",
  messagingSenderId: "141030462850",
  appId: "1:141030462850:web:06cef6c511f658dc4b6b9b"
})

export const FirebaseContext = createContext()

export default function FirebaseProvider({children}) {

  const [user, setUser] = useState(null)
  
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const analytics = firebase.analytics();




  return (
    <FirebaseContext.Provider value={{firebase:firebase, auth:auth, firestore:firestore, user:user, setUser:setUser}}>
      {children}
    </FirebaseContext.Provider>
  )
}
