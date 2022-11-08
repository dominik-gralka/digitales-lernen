//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";
import { InputQuiz } from "../../../../components/quizset/input";

export default function Eval() {

    return (
        <>
            <InputEval
                image="/images/integrieren/eval/eval-04.png"
                question="Wie lautet der Bestand von $f(x)=2x$ von 0 bis 3?"
                answer={ "9" }
            />
        </>
    )
}