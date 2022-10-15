//Einleitungsvideo
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";

export default function Image() {

    return (
        <>
            <MChoiceEval
                image="/images/stammfunktion/eval/mp-4-0.png"
                question="Welches ist die richtige Stammfunktion zu $f(x)=4x$?"
                options={['$F(x)=2x^2+3$', '$F(x)=\\frac{4}{2}x^2-1$', '$F(x)=2x^2+\\sqrt{\\frac{1}{3}}$', 'Alle Optionen sind richtig']}
                answer={3}
            />
        </>
    )
}