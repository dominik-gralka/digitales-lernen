// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Wieviele Stammfunktionen gibt es zu $f(x)=30x^2$?"
            options={ ['30', "Unendlich", "2", "Keine"] }
            answer={ 1 }
            image="/images/stammfunktion/mp-1-0.png"

        />
        </>
    )
}