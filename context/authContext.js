import {  createContext, useContext, useEffect, useState} from "react"
import {onAuthStateChanged, signOut as authSignOut} from "firebase/auth";
import {auth, db} from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const UserContext = createContext();

export const UserProvider = ({children}) =>{
     
    const [currentUser, setCurrentUser] =useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const clear = () =>{
        setCurrentUser(null);
        setIsLoading(false);
    }

    const authStateChanged = async (user) =>{
        setIsLoading(true);
        if (!user) {
            clear();
           return; 
        }

       const userDoc =  await getDoc(doc(db, "users", user.uid))

        setCurrentUser(userDoc.data());
        setIsLoading(false);
    }

    const signOut = () =>{
        authSignOut(auth).then(() =>clear());
    }
  //console.log (authSignOut(auth));
 
    useEffect(() =>{
      const unsubscribe = onAuthStateChanged( auth,
        authStateChanged);
        return () => unsubscribe(); 
    })

    return(
        <UserContext.Provider value={{
            currentUser,
            setCurrentUser,
            isLoading,
            setIsLoading,
            signOut
        }}>
            {children}
        </UserContext.Provider>
    )

}

export const  useAuth = () =>useContext(UserContext);