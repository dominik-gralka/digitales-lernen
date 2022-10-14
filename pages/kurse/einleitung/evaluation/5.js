import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";

export default function Eval() {

    return (
        <>
            <MChoiceEval
                image="/images/einleitung/eval/mp-3-0.png"
                question="Was ist die Besonderheit bei der Integralrechnung?"
                options={
                    [
                        'Es gibt immer 3 Lösungen',
                        '$\\frac{1}{2}∞ = ∞$',
                        'Wir brauchen keine Stammfunktionen',
                        'Wir können uns unendlich nah an den realen Wert annähern'
                    ]
                }
                answer={3}
            />
        </>
    )

}