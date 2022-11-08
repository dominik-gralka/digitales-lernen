// Auf- und Ableiten

import { ProgressHandler } from "../../../components/progress-handler"
import 'katex/dist/katex.min.css'
import { ImageQuiz } from "../../../components/quizset/image"

export default function MP() {
    return (
        <>
            <ProgressHandler />
            <ImageQuiz
                image="/images/integrieren/img-05.png"
                title='Betragsstriche'
                description={'Errechnest du aus einem Integral einen negativen Bestand, verwendest du Betragsstriche um deinen Wert positiv zu machen. Dies machen wir, da es keinen negativen Flächeninhalt geben kann. Die Betragsstriche schreibt du um dein Integral, die eckigen Klammern und deinen letzendlichen Wert.'}
            />
        </>
    )
}