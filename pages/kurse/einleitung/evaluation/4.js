import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";

export default function Eval() {

    return (
        <>
            <MChoiceEval
                image="/images/einleitung/eval/mp-2-0.png"
                question="Wie können wir unser Ergebnis genauer darstellen?"
                options={
                    [
                        'Indem wir es nochmal probieren',
                        'Indem wir die Rechtecke schmaler machen und mehr Rechtecke verwenden',
                        'Indem wir die Funktion ableiten',
                        'Indem wir die Funktion mit sich selbst multiplizieren'
                    ]
                }
                answer={1}
            />
        </>
    )

}