import React from 'react'
import { auth, db } from '../../firebase/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useState } from 'react'
import "./sendmessage.scss"
const Sendmessage = (scroll) => {
    const [send, setsend] = useState()
    const sendMessage = async (e) => {
        e.preventDefault()
        if (send === '') {
            alert('Please enter a valid message')
            return
        }
        const { uid, displayName } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: send,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setsend('')
    }
    return (
        <div className="sendmessage">
            <form onSubmit={sendMessage} action="" className="sendmessage__form">
                <input
                    type="text"
                    placeholder='message'
                    value={send}
                    onChange={(e) => setsend(e.target.value)}
                    className="sendmessage__input" />
                <button
                    type='submit'
                    className="sendmessage__button"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Sendmessage