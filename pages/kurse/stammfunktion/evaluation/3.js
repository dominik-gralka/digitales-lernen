//Einleitungsvideo
import { MChoiceEval } from "../../../../components/quizset/eval-mchoice";

export default function Image() {

    return (
        <>
            <MChoiceEval
                image="/images/stammfunktion/eval/mp-3-0.png"
                question="Welches ist keine Stammfunktion zu $x+sin(x)$?"
                options={['$F(x)=\\frac{1}{2}x^2-cos(x)+3$', '$F(x)=0,5x^2+(-cos(x))-\\frac{1}{2}$', '$F(x)=0,5x^2+cos(x)$', '$F(x)=\\frac{1}{2}x^2-cos(x)+k$']}
                answer={2}
            />
        </>
    )
}