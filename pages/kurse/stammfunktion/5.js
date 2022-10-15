// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'
import { ImageQuiz } from "../../../components/quizset/image"

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <ImageQuiz
            image="/images/stammfunktion/img-1-0.png"
            title='Integrationskonstanten +k und +c'
            description={'Es kann vorkommen, dass du am Ende der Stammfunktion ein +c anstelle des +k sehen wirst. Letztendlich bedeutet dies aber dasselbe. Das +k steht für das Wort "Konstante" wohingegen +c lediglich das Englische Gegenstück ist und für "constant" steht.'}
        />
        </>
    )
}