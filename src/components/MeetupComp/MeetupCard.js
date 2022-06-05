import React from 'react'

function MeetupCard(props) {
    return (
        <div>
            <h1>{props.id}</h1>
            <h3>{props.title}</h3>
            <img src={props.image} alt="img" height={"200px"} />
            <h3>{props.address}</h3>
            <h3>{props.description}</h3>
        </div>
    )
}

export default MeetupCard