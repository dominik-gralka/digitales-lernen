// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Welches der beiden Integrale ist unbestimmt?"
            options={ ['Links', "Rechts"] }
            answer={ 1 }
            image="/images/integrieren/mp-02.png"

        />
        </>
    )
}