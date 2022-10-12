// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Welche Strecke legt der Fahrradfahrer in 2 Stunden zurück?"
            options={ ['12km', "6km/h", "2km", "6km"] }
            answer={ 0 }
            image="/images/einleitung/mp-2-0.png"

        />
        </>
    )
}