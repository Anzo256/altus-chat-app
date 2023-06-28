import { useChatContext } from '@/context/chatContext'
import { db } from '@/firebase/firebase';
import { collection,  onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react'


const Chats = () => {
   const { users, setUsers} = useChatContext();
    
   useEffect(() =>{
      onSnapshot(collection(db, "users"),
      (snapshot) =>{
          const updatedUsers ={}
          snapshot.forEach((doc) =>{
            updatedUsers[doc.id] = doc.data();
            console.log(doc.data());
          });
          setUsers(updatedUsers);
      });
   },[])

  return (
    <div>Chats</div>
  )
}

export default Chats