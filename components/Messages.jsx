import { useChatContext } from '@/context/chatContext'
import { db } from '@/firebase/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'

const Messages = () => {
    const {data} = useChatContext();
    const [messages,setMessages] = useState([]);
    const ref = useRef();

    useEffect(()=>{
       const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) =>{
           if (doc.exists()) {
              setMessages(doc.data().messages)
           }
       })
        return ()=> unsub();

    },[data.chatId]);

  return (
    <div  ref={ref} className='grow p-5 overflow-auto 
    scrollbar flex flex-col'>
        Messages
    </div>
  )
}

export default Messages