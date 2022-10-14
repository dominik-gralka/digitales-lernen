import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";

export default function Eval() {

    return (
        <>
            <MChoiceEval
                image="/images/einleitung/eval/mp-4-0.png"
                question="In diesem Graphen ist der Zufluss in einen Öltank visualisiert. Was könnte der Abschnitt im negativen Bereich bedeuten?"
                options={
                    [
                        'Dass das Öl rückwärts fließt',
                        'Dass Öl aus dem Tank ausfließt',
                        'Dass im Tank ein Vakuum entsteht',
                    ]
                }
                answer={1}
            />
        </>
    )

}