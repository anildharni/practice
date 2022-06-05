import { createContext, useState, useEffect } from "react";

export const ToDoContext = createContext({
    favorites: [],
    totalFavorites: 0
});

function ToDoContextProvider(props) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(0);
    const [favorites, setFavorites] = useState([]);

    const stateHandler = () => {
        setId(id + 1);
        console.log(id)
    }

    const url = 'https://meetuplist-ead78-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json';

    const deleteHandler = (id) => {
        console.log(url + id, "is deleted")
    }

    const addFavHandler = (meetup) => {
        setFavorites((prevState)=>{
            return prevState.concat(meetup)
        })
    }

    const isFavorite = (meetupId) => {
        return favorites.some(meetup => meetup.id === meetupId)
    }

    const removeFav = (meetupId) => {
        setFavorites((prevState) => {
            return prevState.filter(meetup => meetup.id !== meetupId)
        })
    }

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            }).then(data => {
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id: key,
                        isfavorite: false,
                        ...data[key]
                    }
                    meetups.push(meetup)
                }
                setLoading(false)
                setData(meetups)
            });
    }, [])

    const context = {
        idIncrement: stateHandler,
        data: data,
        loading: loading,
        deleteHandle: deleteHandler,
        favorites: favorites,
        addFavHandler: addFavHandler,
        isFavorite:isFavorite,
        removeFav:removeFav
    }

    return <ToDoContext.Provider value={context}>
        {props.children}
    </ToDoContext.Provider>
};

export default ToDoContextProvider;