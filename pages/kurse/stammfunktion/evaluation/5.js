//Einleitungsvideo
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";

export default function Image() {

    return (
        <>
            <MChoiceEval
                image="/images/stammfunktion/eval/mp-5-0.png"
                question="Was ist $k$?"
                options={['Kein Buchstabe', 'Eine Integrationskonstante', 'Das Gegenteil zu c', '$\\frac{1}{2}\\pi$']}
                answer={1}
            />
        </>
    )
}