import React, { useEffect } from 'react'
import { useAuth } from "@/context/authContext"
import { useRouter } from 'next/router';


const Home = () => {
  const router = useRouter();
  const {signOut, currentUser, isLoading} = useAuth();

  useEffect(()=>{
    if (!isLoading && !currentUser) {
       router.push("/login");
    }
  },[currentUser, isLoading])


  return (
    <div>
    <button onClick={signOut}>SignOut</button>
   </div>
  )   
};

export default Home;