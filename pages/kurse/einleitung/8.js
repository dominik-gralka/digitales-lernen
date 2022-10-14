// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Wie viel Öl ist in der ersten halben Stunde durch die Pipeline geflossen? [10L/h]"
            options={ ['1,75L', "30L", "17,5L", "0,45L"] }
            answer={ 2 }
            image="/images/einleitung/mp-3-1.png"

        />
        </>
    )
}