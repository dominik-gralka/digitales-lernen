// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Wie lauten die Grenzen dieses Integrals?"
            options={ ['$-cos(x)$', 'dx=1', '-1 bis 3', '3 bis -1'] }
            answer={ 2 }
            image="/images/integrieren/mp-04.png"

        />
        </>
    )
}