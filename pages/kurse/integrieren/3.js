// Auf- und Ableiten

import { ProgressHandler } from "../../../components/progress-handler"
import 'katex/dist/katex.min.css'
import { ImageQuiz } from "../../../components/quizset/image"

export default function MP() {
    return (
        <>
            <ProgressHandler />
            <ImageQuiz
                image="/images/integrieren/img-02.png"
                title='Umkehrung der Differenzialrechnung'
                description={'Ein essenzieller Bestandteil dieses Semesters ist die Erkenntnis, dass die Integralrechnung prinzipiell die Umkehrung der Differenzialrechnung ist. Das bedeutet, dass du z.B. durch das Ableiten einer Stammfunktion $F(x)$ wieder zur Ursprungsfunktion $f(x)$ gelangst.'}
            />
        </>
    )
}