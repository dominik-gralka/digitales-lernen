// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"
import { InputQuiz } from "../../../components/quizset/input"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <InputQuiz
            question="Wie lautet der Bestand von $f(x)=x$ von 0 bis 2?"
            answer={ "2" }
            image="/images/integrieren/mp-01.png"
        ></InputQuiz>
        </>
    )
}