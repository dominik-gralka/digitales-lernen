// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Bilde die Stammfunktion zu $f(x)=\frac{1}{5}x+3x+1$"
            options={ ["$F(x)=\\frac{1}{10}x^2+1,5x^2+k$", "$F(x)=3x+2$", "$F(x)=\\frac{1}{5}+3+k$", "$F(x)=\\frac{1}{10}x^2+1,5x^2+x+k$"] }
            answer={ 3 }
            image="/images/stammfunktion/mp-1-1.png"

        />
        </>
    )
}