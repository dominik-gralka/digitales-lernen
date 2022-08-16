//Einleitungsvideo

import { ProgressHandler } from "../../../components/progress-handler";
import { ImageQuiz } from "../../../components/quizset/image";

export default function Image() {

    return (
        <>
        <ProgressHandler />
            <ImageQuiz
                image="/images/ableiten/wegfallen.png"
                title='Wegfallen von Zahlen'
                description={'Leiten wir eine Zahl ab, fällt eine alleinstehende Zahl in der letztendlichen Ableitung weg. Du kannst dir eine alleinstehende Zahl als z.B. $5x^0$ vorstellen. Multiplizieren wir den Exponenten 0 mit der 5 ergibt dieses Polynom immer 0. Somit fällt die Zahl weg.'}
            />
        </>
    )
}