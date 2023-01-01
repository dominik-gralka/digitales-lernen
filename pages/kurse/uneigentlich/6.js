//Einleitungsvideo

import { ProgressHandler } from "../../../components/progress-handler";
import { ImageQuiz } from "../../../components/quizset/image";

export default function Image() {

    return (
        <>
        <ProgressHandler />
            <ImageQuiz
                image="https://media.tenor.com/O7lLcY2BrM8AAAAd/bravooooooooooooo.gif"
                title='Ende des Kurses'
                description={'Dies ist das Ende des Kurses. Bist du bereit, dein Wissen zu testen?'}
            />
        </>
    )
}