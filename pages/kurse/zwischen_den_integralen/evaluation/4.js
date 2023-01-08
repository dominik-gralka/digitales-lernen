//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";

export default function Image() {

    return (
        <>
            <MChoiceEval
                question="Wie lautet der umschlossene Flächeninhalt zwischen f(x) und g(x)? Die beiden Funktionen schneiden sich bei $x_1=0$, $x_2=1$ und $x_3=1,39$."
                options={['$\\frac{5}{6}$', '1', '0,93', '0,5']}
                image="/images/zwischen_den_integralen/eval/mp-04.png"
                answer={2}
            />
        </>
    )
}