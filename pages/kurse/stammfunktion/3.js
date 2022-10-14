// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Wie lautet die Stammfunktion zu $f(x)=30x^2$?"
            options={ ['$10x^3$', "$60x$", "$\\frac{30x^2}{2}$", "$30x^2$"] }
            answer={ 0 }
            image="/images/stammfunktion/mp-1-0.png"

        />
        </>
    )
}