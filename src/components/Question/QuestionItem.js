import React from 'react'
import classes from './Question.module.css'

function QuestionItem(props) {
    return (
        <>
            <h2>Q: {props.question.q}</h2>
            <button
                onClick={() => props.clickHandler(props.question.id, 'A')}
                className={props.options[props.question.id] === 'A' ? classes.correct : ""}>
                A: {props.question.a}
            </button>
            <button
                onClick={() => props.clickHandler(props.question.id, 'B')}
                className={props.options[props.question.id] === 'B' ? classes.correct : ""}>
                B: {props.question.b}
            </button>
            <button
                onClick={() => props.clickHandler(props.question.id, 'C')}
                className={props.options[props.question.id] === 'C' ? classes.correct : ""}>
                C: {props.question.c}
            </button>
            <button
                onClick={() => props.clickHandler(props.question.id, 'D')}
                className={props.options[props.question.id] === 'D' ? classes.correct : ""}>
                D: {props.question.d}
            </button>
        </>
    )
}

export default QuestionItem