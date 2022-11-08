// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function MP() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Wie lauten die Grenzen dieses Integrals?"
            options={ ['$\\int_0^2$', '$\\int_2^0$', '$\\int_0^{0,8}$', '$\\int_{0,8}^0$'] }
            answer={ 0 }
            image="/images/integrieren/mp-03.png"

        />
        </>
    )
}