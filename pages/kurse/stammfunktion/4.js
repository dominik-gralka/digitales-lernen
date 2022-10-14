// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Wie lautet die Stammfunktion zu $f(x)=\frac{1}{5}x+3x+1$?"
            options={ ["$\\frac{1}{10}x^2+1,5x^2$", "$3x+2$", "$\\frac{1}{5}+3$", "$\\frac{1}{10}x^2+1,5x^2+x$"] }
            answer={ 3 }
            image="/images/stammfunktion/mp-1-1.png"

        />
        </>
    )
}