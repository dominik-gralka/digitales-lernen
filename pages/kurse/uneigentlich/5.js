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
                options={ ["$nd$", "0,004", "0,3", "9" ] }
                answer={ 1 }
                image="/images/uneigentlich/mp-02.png"
            />
        </>
    )
}