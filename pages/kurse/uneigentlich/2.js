// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'
import { ImageQuiz } from "../../../components/quizset/image"

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <ImageQuiz
            image="/images/uneigentlich/img-01.png"
            title='Definitionsbereich'
            description={'Wenn du als Definitionsbereich nur reelle Zahlen gegeben hast, kann es sein, dass du kein Ergebnis für dein Integral bekommst. Hinter das Gleichheitszeichen schreibst du dann $nd$.'}
        />
        </>
    )
}