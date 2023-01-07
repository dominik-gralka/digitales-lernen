// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'
import { ImageQuiz } from "../../../components/quizset/image"

export default function MP() {
    return (
        <>
        <ProgressHandler />
            <MultipleChoiceQuiz
                question="Wie kannst du die Formel zur Berechnung des umschlossenen Flächeninhalts vereinfacht darstellen?"
                options={ ["$\\int f(x)+g(x)$", "$\\int f(x)-g(x)$", "$\\int f(x) + \\int g(x)$"] }
                answer={ 1 }
                image="/images/zwischen_den_integralen/mp-04.png"
            />
        </>
    )
}