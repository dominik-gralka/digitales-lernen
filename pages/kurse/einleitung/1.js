//Einleitungsvideo

import { PenAndPaperModal } from "../../../components/pen-and-paper";
import { ProgressHandler } from "../../../components/progress-handler";
import { VideoQuiz } from "../../../components/quizset/video";

export default function Einleitungsvideo() {
    return (
        <>
        <PenAndPaperModal />
        <ProgressHandler />
            <VideoQuiz
                video="/videos/Einleitung-1-0.mp4"
                title="Einleitungsvideo"
                description="In diesem Video lernst du alle Grundlagen der Integralrechnung kennen, die du in den folgenden Lektionen brauchen wirst."
            />
        </>
    )
}