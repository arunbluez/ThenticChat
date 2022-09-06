import React, { useContext, useRef, useState } from 'react';


import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useEthers } from '@usedapp/core';
import ChatMessage from './ChatMessage';
import { FirebaseContext } from '../context/FirebaseProvider';



export default function ChatRoom() {
    const { account } = useEthers();
    const {firebase,firestore, user, setUser} = useContext(FirebaseContext)
    const dummy = useRef() as React.MutableRefObject<HTMLInputElement>;
    const messagesRef = firestore.collection('messages');
    const usersRef = firestore.collection('users');
    const query = messagesRef.orderBy('createdAt').limit(25);

    //ignore ts
    /*eslint-disable */
    const [messages] = useCollectionData(query); // eslint-disable-line
  /*eslint-enable */
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e:any) => {
      e.preventDefault();

  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        account
      })

      user.messages += 1
      setUser({...user})
      usersRef.doc(account).set(user, {merge:true})
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map((msg:any) => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>💬</button>
  
      </form>
    </>)
}
