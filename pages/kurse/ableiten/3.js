//Einleitungsvideo

import { ProgressHandler } from "../../../components/progress-handler";
import { ImageQuiz } from "../../../components/quizset/image";

export default function Image() {

    return (
        <>
        <ProgressHandler />
            <ImageQuiz
                image="/images/ableiten/trigonometrisch.png"
                title='Ableiten von trigonometrischen Funktionen'
                description={'Sinus- und Cosinus lassen sich ganz einfach anhand eines Kreislaufes ableiten, der sich unendlich wiederholt. Aus $sin(x)$ wird somit abgeleitet $cos(x)$ und aus $-cos(x)$ wird abgeleitet wieder $sin(x)$. Umgekehrt wird z.B. aus $-sin(x)$ in der Stammfunktion wieder $cos(x)$.'}
            />
        </>
    )
}