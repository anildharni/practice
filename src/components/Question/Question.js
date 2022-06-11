import React, { useContext } from 'react'
import QuizAppContext from '../store/Context';
import QuestionItem from './QuestionItem'

function Question() {

    const ctx = useContext(QuizAppContext);

    return (
        ctx.questionData
            .filter(
                (question) => question.id === ctx.questionNumber)
            .map((question) => {
                return <div key={ctx.questionNumber}>
                    <QuestionItem
                        question={question}
                        options={ctx.optionArray}
                        clickHandler={ctx.selectOptionHandler} />
                    <div>
                        <button
                            onClick={ctx.prevQuestionHandler}
                            disabled={ctx.questionNumber <= 1 ? true : false}>
                            Previous
                        </button>
                        <button
                            onClick={ctx.nextQuestionHandler}
                            disabled={ctx.questionNumber >= 5 ? true : false}>
                            Next
                        </button>
                        <button
                            onClick={ctx.submitHandler}
                            disabled={Object.keys(ctx.optionArray).length < 5 ? true : false}>
                            Submit
                        </button>
                    </div>
                    <h3>Your current high score is {ctx.highScore}</h3>
                </div>
            })
    )
}

export default Question