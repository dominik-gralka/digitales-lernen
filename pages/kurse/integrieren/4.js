// Auf- und Ableiten

import { ProgressHandler } from "../../../components/progress-handler"
import 'katex/dist/katex.min.css'
import { ImageQuiz } from "../../../components/quizset/image"

export default function MP() {
    return (
        <>
            <ProgressHandler />
            <ImageQuiz
                image="/images/integrieren/img-03.png"
                title='Bestimmtes- und unbestimmtes Integral'
                description={'Wie im Video bereits erläutert, errechnest du mit einem bestimmten Integral den Bestand von einem bis zum anderen x-Wert. Den Wert von dem du anfängst steht immer unten, der Wert, bis zu dem du rechnest, steht immer oben. Das unbestimmte Integral gibt prinzipiell nur die Stammfunktion einer Funktion $f(x)$ an.'}
            />
        </>
    )
}