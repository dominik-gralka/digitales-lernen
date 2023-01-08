//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";

export default function Image() {

    return (
        <>
            <MChoiceEval
                question="Wie lautet der umschlossene Flächeninhalt zwischen f(x) und g(x)?"
                options={['0', '0,006', '1,17$_{\\times 10^{-5}}$', '0,0001']}
                image="/images/zwischen_den_integralen/eval/mp-01.png"
                answer={2}
            />
        </>
    )
}