import React from 'react'
import NewMeetupCreate from './NewMeetupCreate'
import { useNavigate } from 'react-router-dom';


function NewMeetup() {
    const navigate = useNavigate();
    const addHandler = (meetupData) => {
        fetch('https://meetuplist-ead78-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                navigate('/')
            });
    }

    return (
        <div>
            <NewMeetupCreate onAddHandler={addHandler} />
        </div>
    )
}

export default NewMeetup