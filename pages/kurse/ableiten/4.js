//Einleitungsvideo

import { ProgressHandler } from "../../../components/progress-handler";
import { ImageQuiz } from "../../../components/quizset/image";

export default function Image() {

    return (
        <>
        <ProgressHandler />
            <ImageQuiz
                image="/images/ableiten/wegfallen.png"
                title='Ende des Kapitels'
                description={'Dies ist das Ende des Kapitels. Bist du bereit, dein Wissen zu testen?'}
            />
        </>
    )
}