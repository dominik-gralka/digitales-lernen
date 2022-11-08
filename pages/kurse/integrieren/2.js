// Auf- und Ableiten

import { ProgressHandler } from "../../../components/progress-handler"
import 'katex/dist/katex.min.css'
import { ImageQuiz } from "../../../components/quizset/image"

export default function MP() {
    return (
        <>
            <ProgressHandler />
            <ImageQuiz
                image="/images/integrieren/img-01.png"
                title='Definitionsbereich'
                description={'Der Definitionsbereich ordnet zu, welche Werte dem x-Wert zugewiesen werden können. In diesem Fall bedeutet dies, dass x jede reelle Zahl sein kann.'}
            />
        </>
    )
}