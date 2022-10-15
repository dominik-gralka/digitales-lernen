//Einleitungsvideo
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";

export default function Image() {

    return (
        <>
            <MChoiceEval
                image="/images/stammfunktion/eval/mp-1-0.png"
                question="Wie lautet die Stammfunktion zu $f(x) = 5x^2$?"
                options={['$F(x)=1\\frac{2}{3}x^3+k$', '$F(x)=\\frac{5}{2}x^3+k$', '$F(x)=\\frac{3}{5}x^3+k$', "$f(x)'=10x$"]}
                answer={0}
            />
        </>
    )
}