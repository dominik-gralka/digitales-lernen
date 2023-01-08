//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";

export default function Image() {

    return (
        <>
            <MChoiceEval
                question="Wie lautet der umschlossene Flächeninhalt zwischen f(x) und g(x)?"
                options={['4,22', '1,58', '2,63', '0,2']}
                image="/images/zwischen_den_integralen/eval/mp-03.png"
                answer={0}
            />
        </>
    )
}