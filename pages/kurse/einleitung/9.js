// Auf- und Ableiten

import { ProgressHandler } from "../../../components/progress-handler"
import 'katex/dist/katex.min.css'
import { ImageQuiz } from "../../../components/quizset/image"

export default function MP() {
    return (
        <>
            <ProgressHandler />
            <ImageQuiz
                image="/images/einleitung/ober-untersumme.png"
                title='Ober- und Untersumme'
                description={'Die unter dem Graphen eingeschlossene Fläche lässt sich als Ober- oder Untersumme darstellen. Je nach dem, wo du deine Rechtecke ansetzt, näherst du dich anhand der Fläche unterschiedlich an den realen Wert der Fläche an.'}
            />
        </>
    )
}