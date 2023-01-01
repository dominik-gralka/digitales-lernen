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
            image="/images/uneigentlich/img-02.png"
            title='Wiederholung Kehrwert'
            description={'Für diese Lektion ist es wichtig zu wissen, dass $\\frac{1}{x}$ das gleiche wie $x^{-1}$ ist. Somit kannst du z.B. $\\frac{1}{x^2}$ auch als $x^{-2}$ aufschreiben.'}
        />
        </>
    )
}