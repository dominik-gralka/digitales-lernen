//Einleitungsvideo

import { PenAndPaperModal } from "../../../components/pen-and-paper";
import { ProgressHandler } from "../../../components/progress-handler";
import { VideoQuiz } from "../../../components/quizset/video";

export default function Einleitungsvideo() {
    return (
        <>
        <ProgressHandler />
            <VideoQuiz
                video="/videos/Einleitung-1-1.mp4"
                title="Praktische Anwendungsmöglichkeiten"
                description="In diesem Video lernst du, wie du die Integralrechnung in der Praxis anwenden kannst."
            />
        </>
    )
}