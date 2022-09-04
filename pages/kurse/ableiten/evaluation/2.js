//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";
import { InputQuiz } from "../../../../components/quizset/input";

export default function Image() {

    return (
        <>
            <MChoiceEval
                image="/images/ableiten/eval/2.png"
                question="Wie lautet die Ableitung von $f(x) = 21x^4 + 2x^2 + 9$?"
                options={['$f(x)\'\=42x^4+4$', '$f(x)\'\=64x^3+4x + 9$', '$f(x)\'\=84x^3+4x$', '$f(x)\'\=20x + 7x + 1$']}
                answer={2}
            />
        </>
    )
}