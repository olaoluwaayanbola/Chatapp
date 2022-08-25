import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Message from '../Message/Message'
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import Sendmessage from '../sendmessage/Sendmessage';
import "./Chat.scss"
const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });
        return () => unsubscribe();
    }, []);
    return (
        <div className="Chat__container">
            <div className="Container-Message">
                {messages &&
                    messages.map((message) => (
                        <Message key={message.id} message={message} scroll={scroll}/>
                    ))}
            </div>
            <Sendmessage />
            <span useRef={scroll}></span>
        </div>
    )
}

export default Chat