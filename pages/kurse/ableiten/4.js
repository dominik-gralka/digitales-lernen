//Einleitungsvideo

import { ProgressHandler } from "../../../components/progress-handler";
import { ImageQuiz } from "../../../components/quizset/image";

export default function Image() {

    return (
        <>
        <ProgressHandler />
            <ImageQuiz
                image="/images/ableiten/polynom.png"
                title='Ableitung nach Polynomen'
                description={'Hast du eine Funktion, die aus mehreren Teilen besteht wie $f(x) = 2x^2 + 3x$ kannst du einfach Polynom für Polynom ableiten. Du fängst erstmal mit $2x^2$ an und leitest dann $3x$ ab. Deine Ergebnis lautet dann $4x + 3$.'}
            />
        </>
    )
}