//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";

export default function Image() {

    return (
        <>
            <MChoiceEval
                question="Welche der folgenden Lösungen ist richtig?"
                options={['0', '$nd$', '$\\frac{1}{8}$', '2']}
                image="/images/uneigentlich/eval/mp-01.png"
                answer={2}
            />
        </>
    )
}