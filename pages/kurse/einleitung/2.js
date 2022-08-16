// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

import 'katex/dist/katex.min.css'

export default function AufundAbleiten() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Test"
            options={ ['We give illustrations for the three processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$.', "Option 2", "Option 3", "Option 4"] }
            answer={ 0 }

            // Placeholder image
            image="https://via.placeholder.com/1920x1080"

        />
        </>
    )
}