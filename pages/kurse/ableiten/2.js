//Einleitungsvideo

import { ProgressHandler } from "../../../components/progress-handler";
import { ImageQuiz } from "../../../components/quizset/image";

export default function Image() {

    const lat1 = 'We give illustrations for the three processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$.'

    return (
        <>
        <ProgressHandler />
            <ImageQuiz
                image="/images/ableiten/Wegfallen.png"
                title='Wegfallen von Zahlen'
                description={'We give illustrations for the three processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$.'}
            />
        </>
    )
}