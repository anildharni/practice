import React, { useContext } from 'react'
import { ToDoContext } from '../../store/Context'

function MeetupItem(props) {

    const ctx = useContext(ToDoContext);

    const itemIsFavorite = ctx.isFavorite(props.dummy_data.id)
    console.log(itemIsFavorite)

    const toggleFav = () => {
        itemIsFavorite ? ctx.removeFav(props.dummy_data.id) : ctx.addFavHandler({
            id:props.dummy_data.id,
            title: props.dummy_data.title,
            image: props.dummy_data.image,
            address: props.dummy_data.address,
            description: props.dummy_data.description
        })
    }


    return (
        <div>
            <h3>{props.dummy_data.title}</h3>
            <img src={props.dummy_data.image} alt="img" height={"200px"} />
            <h3>{props.dummy_data.address}</h3>
            <h3>{props.dummy_data.description}</h3>
            <div style={{ display: "flex" }}>
                <button onClick={ctx.deleteHandle}>Delete</button>
                <button onClick={toggleFav}>{!itemIsFavorite ? "Add to Favorites" : "Remove from Favorites"}</button>
            </div>

        </div>
    )
}

export default MeetupItem