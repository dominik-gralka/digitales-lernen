// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Welche Strecke legt der Fahrradfahrer in 3 Stunden zurück?"
            options={ ['10km', "7,5km", "3,5km", "0km"] }
            answer={ 1 }
            image="/images/einleitung/mp-2-1.png"

        />
        </>
    )
}