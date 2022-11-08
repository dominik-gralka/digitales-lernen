// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Wie lautet dx in diesem Graphen?"
            options={ ['1', '$n \\rightarrow 0$', '0,5', '2'] }
            answer={ 2 }
            image="/images/integrieren/mp-05.png"

        />
        </>
    )
}