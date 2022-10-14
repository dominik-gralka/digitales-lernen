import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";

export default function Eval() {

    return (
        <>
            <MChoiceEval
                image="/images/einleitung/eval/mp-2-0.png"
                question="Warum ist das von uns errechnete Ergebnis ungenau?"
                options={
                    [
                        '42',
                        'Weil die Funktion nicht grade ist',
                        'Weil die Achsenbeschriftung nicht genau genug ist',
                        'Weil unsere Rechtecke nicht akkurat die Fläche unter dem Graphen umfassen.'
                    ]
                }
                answer={3}
            />
        </>
    )

}