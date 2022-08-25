import React from 'react'
import "./Message.scss"
import { auth } from '../../firebase/firebase'
const Message = ({ message }) => {
    if (message.uid === auth.currentUser.uid) {
        console.log("vow")
    }
    return (
        <div className="Message__container">
            <div className="Message">
                <span className="Message__description">
                    <p className='Message__Name'>{message.name}</p>
                    <img src="" alt="" className='Message__Image' />
                </span>
                <p className='Message__Desc'>
                    {message.text}
                </p>
                <p>
                    {(message.timestamp.seconds/1000) + "s"} 
                </p>
            </div>
        </div>
    )
}

export default Message