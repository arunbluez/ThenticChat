import { useEthers } from '@usedapp/core';
import React from 'react'
import Identicon from './Identicon';

export default function ChatMessage(props:any) {
    const { account } = useEthers();
    const { text, account:uid } = props.message;

    const messageClass = uid === account ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <Identicon account={account}/>
        <p>{text}</p>
      </div>
    </>)
}
