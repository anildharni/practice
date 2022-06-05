import React, { useContext } from 'react'
import MeetupCard from '../../components/MeetupComp/MeetupCard'
import { ToDoContext } from '../../store/Context'

function FavMeetups() {
    const ctx = useContext(ToDoContext)
    console.log(ctx.favorites)
    return (
        <div>
            {ctx.favorites.length > 0 ? (ctx.favorites.map((meet)=> <MeetupCard 
            id={meet.id}
            title={meet.title}
            image={meet.image}
            address={meet.address}
            description={meet.description}
            />)) : "No favorites available"}
        </div>
    )
}

export default FavMeetups