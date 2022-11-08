//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";
import { InputQuiz } from "../../../../components/quizset/input";

export default function Eval() {

    return (
        <>
            <MChoiceEval
                image="/images/integrieren/eval/eval-06.png"
                question="Wie lautet das unbestimmte Integral von $3x^2$?"
                options={['$\\int 3x^2dx=x^3+k$', '$\\int_a^b3x^2dx=[x^3]_a^b$', '$\\int_a^b 3x^2dx=x^3+k$']}
                answer={0}
            />
        </>
    )
}