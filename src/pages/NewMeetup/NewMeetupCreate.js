import React, { useRef } from 'react'

function NewMeetupCreate(props) {

    const titleInputRef =useRef();
    const imageInputRef = useRef();
    const addressInputRef=useRef();
    const descriptionInputRef=useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Value submitted")
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }

        props.onAddHandler(meetupData);
    }


    return (
        <form style={{display:"flex", flexDirection:"column"}} onSubmit={submitHandler}>
            <label>
                Title:
                <input type="text" required ref={titleInputRef}/>
            </label>
            <label>
                Image:
                <input type="text" required ref={imageInputRef}/>
            </label>
            <label>
                Address:
                <input type="text" required ref={addressInputRef}/>
            </label>
            <label>
                Description:
                <input type="text" required ref={descriptionInputRef}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default NewMeetupCreate