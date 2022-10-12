// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Wie viel Öl ist in den ersten 3 Stunden durch die Pipeline geflossen? [100L/h]"
            options={ ['20L', "680L", "5.200L", "4,8L"] }
            answer={ 1 }
            image="/images/einleitung/mp-3-0.png"

        />
        </>
    )
}