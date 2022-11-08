//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";
import { InputQuiz } from "../../../../components/quizset/input";

export default function Eval() {

    return (
        <>
            <MChoiceEval
                image="/images/integrieren/eval/eval-01.png"
                question="Wie lautet der Bestand von $f(x)=5x^2$ von -1 bis 0?."
                options={['1,7', '0', '-1,7', '6']}
                answer={0}
            />
        </>
    )
}