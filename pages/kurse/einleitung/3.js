// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Wie schnell fährt der Fahrradfahrer in diesem Graph?"
            options={ ['6km/h', "3km/h", "3,5km/h", "2,5km/h"] }
            answer={ 3 }
            image="/images/einleitung/mp-1-1.png"

        />
        </>
    )
}