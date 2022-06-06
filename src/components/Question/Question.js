import React, { useState, useEffect } from 'react'
import QuestionItem from './QuestionItem'

function Question() {

    const [questionNumber, setQuestionNumber] = useState(1);
    const [optionArray, setOptionArray] = useState({});
    const correctAnswers = { 1: 'B', 2: 'A', 3: 'D', 4: 'B', 5: 'C' }
    const [highScore, setHighScore] = useState(0);
    const [questionData, setQuestionData] = useState([]);

    const url = "https://meetuplist-ead78-default-rtdb.asia-southeast1.firebasedatabase.app/quiz-app.json"

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            }).then(res => {
                const question_list = []
                res.map(question => {
                    return question_list.push(question)
                })
                setQuestionData(question_list)
            })
    },
        [])

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
        questionData
            .filter(
                (question) => question.id === questionNumber)
            .map((question) => {
                return <div key={questionNumber}>
                    <QuestionItem
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
                </div>
            })
    )
}

export default Question