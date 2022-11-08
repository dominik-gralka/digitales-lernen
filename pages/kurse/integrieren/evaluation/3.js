//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";
import { InputQuiz } from "../../../../components/quizset/input";

export default function Eval() {

    return (
        <>
            <MChoiceEval
                image="/images/integrieren/eval/eval-03.png"
                question="Wie lautet die Stammfunktion zu $0,3x^2$?"
                options={['$0,6x$', '$0,1x^3$', '$0,6x^3$', '$x^2$']}
                answer={1}
            />
        </>
    )
}