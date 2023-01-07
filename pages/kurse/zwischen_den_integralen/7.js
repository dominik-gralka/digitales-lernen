// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'
import { ImageQuiz } from "../../../components/quizset/image"

export default function MP() {
    return (
        <>
        <ProgressHandler />
            <MultipleChoiceQuiz
                question="Was passiert mit der umschlossenen Fläche, wenn die Parabel um den Faktor 1 gestaucht wird?"
                options={ ["Die Fläche verkleinert sich", "Die Fläche verdoppelt sich", "Die Fläche vergrößert sich um das Zehnfache"] }
                answer={ 2 }
                image="/images/zwischen_den_integralen/mp-06.png"
            />
        </>
    )
}