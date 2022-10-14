//Einleitungsvideo

import { InputEval } from "../../../../components/quizset/eval-input";
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";
import { InputQuiz } from "../../../../components/quizset/input";

export default function Eval() {

    return (
        <>
            <MChoiceEval
                image="/images/einleitung/eval/mp-1-0.png"
                question="Wie lautet der ungefähre Bestand zwischen Punkt x=0 und x=3? Nutze die Untersumme."
                options={['3', '0', '1', '6']}
                answer={0}
            />
        </>
    )
}