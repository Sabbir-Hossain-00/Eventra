import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { Loader } from "../pages/Loader/Loader";

export const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{

    const [isDark, setIsDark] = useState(false);
    const [user , setUser] = useState("");
    const [loading , setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    
    const createUser = (email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signinUser = (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const googleSignin = ()=>{
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }

    const updateUser = (userData)=>{
        setLoading(true)
        return updateProfile(auth.currentUser , userData )
    }


    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth , (currUser)=>{
         setUser(currUser)
         setLoading(false);
       });

       return()=>{
         unsubscribe();
       }  
    },[]);

    const logOut = ()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const theme = JSON.parse(localStorage.getItem("eventraTheme"));
        setIsDark(theme)
    },[])





    const userInfo = {
        createUser,
        signinUser,
        user,
        logOut,
        loading,
        updateUser,
        googleSignin,
        isDark,
        setIsDark,
    }

    return(
        <AuthContext value={userInfo}>{children}</AuthContext>
    )
}