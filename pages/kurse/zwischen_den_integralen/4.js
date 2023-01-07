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
                question="Wie lautet der umschlossene Flächeninhalt? Die Schnittpunkte lauten $\pm$ 0,93 (Gradmaß)"
                options={ ["0,18", "3", "0,93", "4"] }
                answer={ 0 }
                image="/images/zwischen_den_integralen/mp-03.png"
            />
        </>
    )
}