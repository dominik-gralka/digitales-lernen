// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Wie wird dieser Abschnitt aufgelöst?"
            options={ ['$F(10) - F(3)$', '$F(3) - F(10)$', '$\\int f(x)dx=F(a)-F(b)$', '$10-3$'] }
            answer={ 0 }
            image="/images/integrieren/mp-07.png"

        />
        </>
    )
}