//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";
import { InputQuiz } from "../../../../components/quizset/input";

export default function Image() {

    return (
        <>
            <MChoiceEval
                image="/images/ableiten/eval/4.png"
                question="Wie lautet die Ableitung von $f(x) = sin(x)$?"
                options={['$f(x)\'\=-sin(x)$', '$f(x)\'\=-cos(x)$', '$f(x)\'\=sin(x)$', '$f(x)\'\=cos(x)$']}
                answer={3}
            />
        </>
    )
}