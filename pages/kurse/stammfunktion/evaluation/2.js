//Einleitungsvideo
import { InputEval } from "../../../../components/quizset/eval-input";

export default function Image() {

    return (
        <>
            <InputEval
                image="/images/stammfunktion/eval/mp-2-0.png"
                question="Vervollständige die Stammfunktion zu $f(x)=\frac{1}{3}x^2+3$.$F(x)=\frac{1}{9}x^3+...$"
                answer="3x+k"
            />
        </>
    )
}