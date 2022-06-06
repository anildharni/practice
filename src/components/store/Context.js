import { createContext } from "react";

export default QuizAppContext = createContext();

export function QuizAppContextProvider(props) {

    context = {}

    return <QuizAppContext.Provider value={context}>
        {props.children}
    </QuizAppContext.Provider>
}