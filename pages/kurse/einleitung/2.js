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
            options={ ['5km/h', "12km", "6km/h", "2km/h"] }
            answer={ 2 }
            image="/images/einleitung/mp-1-0.png"

        />
        </>
    )
}