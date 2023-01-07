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
                question="Wie lautet der umschlossene Flächeninhalt?"
                options={ ["3,78", "1,41", "1", "2"] }
                answer={ 3 }
                image="/images/zwischen_den_integralen/mp-02.png"
            />
        </>
    )
}