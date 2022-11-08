// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Was ist hierbei eingezeichnet?"
            options={ ['Bestand', 'Änderungsrate', 'Wert der Integrationsvariable', 'Maximum des Graphen'] }
            answer={ 1 }
            image="/images/integrieren/mp-06.png"

        />
        </>
    )
}