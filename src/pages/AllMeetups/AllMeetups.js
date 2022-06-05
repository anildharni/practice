import React, { useContext } from 'react'
import MeetupItem from '../../components/MeetupComp/MeetupItem';
import { ToDoContext } from '../../store/Context';



function AllMeetups() {

    const ctx= useContext(ToDoContext);
    // console.log(fetchData())
    return (
        <>
            <div>
                AllMeetups
            </div>
            {ctx.loading
                ? 'still loading...'
                : ctx.data.map((dataEl, index) => <MeetupItem
                    key={dataEl.id}
                    dummy_data={dataEl}
                    deleteHandle={() => ctx.deleteHandle(dataEl.id)} />)}
        </>
    )
}

export default AllMeetups