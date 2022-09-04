//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";

export default function Image() {

    return (
        <>
            <InputEval
                image="/images/ableiten/eval/3.png"
                question="Die Ableitung zu  $f(x) = 9x^3 + 3x$ lautet <br>$f(x)'=27x^2+ ... ?$"
                answer="3"
            />
        </>
    )
}