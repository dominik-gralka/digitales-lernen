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
                question="Macht es einen großen Unterschied, welche Funktion ich von welcher abziehe?"
                options={ ["Ja, ich bekomme sonst ein falsches Ergebnis", "Ja, ich berechne sonst den Flächeninhalt der falschen Funktion", "Nein, es ändert sich nichts", "Nein, mit Betragsstrichen bekomme ich trotzdem das gleiche Ergebnis"] }
                answer={ 3 }
                image="/images/zwischen_den_integralen/mp-05.png"
            />
        </>
    )
}