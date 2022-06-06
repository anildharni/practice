import { createContext, useState, useEffect } from "react";

export const QuizAppContext = createContext();

export function QuizAppContextProvider(props) {

    const correctAnswers = { 1: 'B', 2: 'A', 3: 'D', 4: 'B', 5: 'C' }
    const url = "https://meetuplist-ead78-default-rtdb.asia-southeast1.firebasedatabase.app/quiz-app.json"

    const [questionNumber, setQuestionNumber] = useState(1);
    const [optionArray, setOptionArray] = useState({});
    const [highScore, setHighScore] = useState(0);
    const [questionData, setQuestionData] = useState([]);

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

    const prevQuestionHandler = () => {
        return setQuestionNumber(questionNumber - 1);
    }

    const nextQuestionHandler = () => {
        return setQuestionNumber(questionNumber + 1);
    }

    const context = {
        questionNumber: questionNumber,
        optionArray: optionArray,
        highScore: highScore,
        questionData: questionData,
        prevQuestionHandler: prevQuestionHandler,
        nextQuestionHandler: nextQuestionHandler,
        selectOptionHandler: selectOptionHandler,
        submitHandler: submitHandler
    }

    return <QuizAppContext.Provider value={context}>
        {props.children}
    </QuizAppContext.Provider>
}

export default QuizAppContext;