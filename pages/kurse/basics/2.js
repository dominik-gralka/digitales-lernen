// Auf- und Ableiten

import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

export default function AufundAbleiten() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Wie lautet die Stammfuktion von x?"
            options={ ["Option 1", "Option 2", "Option 3", "Option 4"] }
            answer={ 0 }
            image="https://img.freepik.com/premium-photo/one-man-traveler-with-backpack-is-standing-looking-sunset-beautiful-nature-landscape-colorful-sun-sky-koh-tarutao-island-satun-thailand-16-9-wide-screen_536080-1318.jpg?w=1480"
        />
        </>
    )
}