//Einleitungsvideo

import { PenAndPaperModal } from "../../../components/pen-and-paper";
import { ProgressHandler } from "../../../components/progress-handler";
import { ImageQuiz } from "../../../components/quizset/image";

export default function Image() {
    return (
        <>
        <ProgressHandler />
            <ImageQuiz
                image="/images/ableiten/Wegfallen.png"
                title="Wegfallen von Zahlen"
                description={
                    <>
                    <p>Steht eine Zahl in der ursprünglichen Formel alleine, fällt diese in der Ableitung weg.</p>
                    {/*<p>3x^4 + 5x^0</p>*/}
                    </>
                }
            />
        </>
    )
}