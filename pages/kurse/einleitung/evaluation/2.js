import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";

export default function Eval() {

    return (
        <>
            <MChoiceEval
                image="/images/einleitung/eval/mp-1-1.png"
                question="Wie lautet der ungefähre Bestand zwischen Punkt x=0 und x=4? Nutze die Obersumme."
                options={['1', '3', '12', '6']}
                answer={2}
            />
        </>
    )
}