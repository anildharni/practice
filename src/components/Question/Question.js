import React, { useState } from 'react'
import QuestionItem from './QuestionItem'

const url = "https://meetuplist-ead78-default-rtdb.asia-southeast1.firebasedatabase.app/quiz-app.json"

useEffect(
    fetch(url)
        .then((res) => {
            return res.json()
        }), [])

const question_list = [
    {
        id: 1,
        q: 'what is 2*1',
        a: '1',
        b: '2',
        c: '3',
        d: '4'
    },
    {
        id: 2,
        q: 'what is 2*2',
        a: '4',
        b: '5',
        c: '6',
        d: '7'
    },
    {
        id: 3,
        q: 'what is 2*3',
        a: '9',
        b: '7',
        c: '8',
        d: '6'
    },
    {
        id: 4,
        q: 'what is 2*4',
        a: '4',
        b: '8',
        c: '12',
        d: '16'
    },
    {
        id: 5,
        q: 'what is 2*5',
        a: '11',
        b: '12',
        c: '10',
        d: '19'
    }
]



function Question() {
    const [questionNumber, setQuestionNumber] = useState(1);
    const [optionArray, setOptionArray] = useState({});
    const correctAnswers = { 1: 'B', 2: 'A', 3: 'D', 4: 'B', 5: 'C' }
    const [highScore, setHighScore] = useState(0);

    const prevQuestionHandler = () => {
        return setQuestionNumber(questionNumber - 1);
    }

    const nextQuestionHandler = () => {
        return setQuestionNumber(questionNumber + 1);
    }

    const submitHandler = () => {
        const val = Object.keys(optionArray).filter((key) => {
            return optionArray[key] === correctAnswers[key]
        }).length
        alert('Your score is ' + val)
        return val > highScore ? setHighScore(val) : ""
    }

    const selectOptionHandler = (quest, val) => {
        return setOptionArray((prevState) => ({ ...prevState, [quest]: val }))
    }

    return (
        question_list
            .filter(
                (question) => question.id === questionNumber)
            .map((question) => {
                return <>
                    <QuestionItem
                        key={questionNumber}
                        question={question}
                        options={optionArray}
                        clickHandler={selectOptionHandler} />
                    <div>
                        <button
                            onClick={prevQuestionHandler}
                            disabled={questionNumber <= 1 ? true : false}>
                            Previous
                        </button>
                        <button
                            onClick={nextQuestionHandler}
                            disabled={questionNumber >= 5 ? true : false}>
                            Next
                        </button>
                        <button
                            onClick={submitHandler}
                            disabled={Object.keys(optionArray).length < 5 ? true : false}>
                            Submit
                        </button>
                    </div>
                    <h3>Your current high score is {highScore}</h3>
                </>
            })
    )
}

export default Question