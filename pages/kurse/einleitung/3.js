
import { MultipleChoiceQuiz } from "../../../components/quizset/mchoice"
import { ProgressHandler } from "../../../components/progress-handler"

export default function AufundAbleiten() {
    return (
        <>
        <ProgressHandler />
        <MultipleChoiceQuiz
            question="Wie schnell fährt das Auto in diesem Graph?"
            options={ ["10km/h", "35km/h", "60km/h", "0km/h"] }
            answer={ 3 }
            image="https://img.freepik.com/premium-photo/one-man-traveler-with-backpack-is-standing-looking-sunset-beautiful-nature-landscape-colorful-sun-sky-koh-tarutao-island-satun-thailand-16-9-wide-screen_536080-1318.jpg?w=1480"
        />
        </>
    )
}