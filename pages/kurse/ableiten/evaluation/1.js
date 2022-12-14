//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";
import { InputQuiz } from "../../../../components/quizset/input";

export default function Image() {

    return (
        <>
            <MChoiceEval
                image="/images/ableiten/eval/1.png"
                question="Wie lautet die Ableitung von $f(x) = 2x^2 + 3x$?"
                options={['$f(x)\'\=2x^2+3$', '$f(x)\'\=4x+3$', '$F(x)= \\frac{2}{3}x^3+\\frac{3}{2}x^2$', '$f(x)\'\=4x$']}
                answer={1}
            />
        </>
    )
}