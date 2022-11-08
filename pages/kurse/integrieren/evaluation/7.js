//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";
import { InputQuiz } from "../../../../components/quizset/input";

export default function Eval() {

    return (
        <>
            <MChoiceEval
                image="/images/integrieren/eval/eval-07.png"
                question="Wie lautet der Bestand von $f(x)=sin(x)$ von $\frac{1}{3}$ bis $3$."
                options={['24', '-1,93', '1,93', '2,93']}
                answer={2}
            />
        </>
    )
}