//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";
import { InputQuiz } from "../../../../components/quizset/input";

export default function Eval() {

    return (
        <>
            <MChoiceEval
                image="/images/integrieren/eval/eval-02.png"
                question="Was fehlt in diesem Integral?"
                options={['Grenzen', '-a', 'dx', 'Die Funktion']}
                answer={2}
            />
        </>
    )
}