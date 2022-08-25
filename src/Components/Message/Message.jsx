import React from 'react'
import "./Message.scss"
const Message = ({ message }) => {
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
                    {/* {message.timestamp.seconds}  */}
                </p>
            </div>
        </div>
    )
}

export default Message