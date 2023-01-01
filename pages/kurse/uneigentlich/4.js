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
                question="Wie lautet das Ergebnis dieses Integrals?"
                options={ ["$nd$", "3", "17", "51"] }
                answer={ 0 }
                image="/images/uneigentlich/mp-01.png"
            />
        </>
    )
}