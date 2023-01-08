//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";

export default function Image() {

    return (
        <>
            <MChoiceEval
                question="Wie lautet der umschlossene Flächeninhalt zwischen f(x) und g(x)?"
                options={['3$_{\\times 10^{-2.7}}$', '1,7', '0.1', '2,7']}
                image="/images/zwischen_den_integralen/eval/mp-02.png"
                answer={3}
            />
        </>
    )
}