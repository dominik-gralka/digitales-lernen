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
                question="Wie lautet der umschlossene Flächeninhalt? Die Schnittpunkte lauten $\pm$ 1,41"
                options={ ["0", "3,78", "1,41", "2"] }
                answer={ 1 }
                image="/images/zwischen_den_integralen/mp-01.png"
            />
        </>
    )
}