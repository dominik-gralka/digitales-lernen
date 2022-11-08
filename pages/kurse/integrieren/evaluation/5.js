//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";
import { InputQuiz } from "../../../../components/quizset/input";

export default function Eval() {

    return (
        <>
            <MChoiceEval
                image="/images/integrieren/eval/eval-05.png"
                question="Vervollständige die Gleichung aus dem Bild."
                options={['$-1+4$', '$(2\\cdot(-1))-(2\\cdot(-2))$', '$x^2-x^1$', '$F(-2)-F(-1)$']}
                answer={0}
            />
        </>
    )
}