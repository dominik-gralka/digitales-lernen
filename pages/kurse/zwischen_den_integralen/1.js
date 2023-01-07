//Einleitungsvideo

import { PenAndPaperModal } from "../../../components/pen-and-paper";
import { ProgressHandler } from "../../../components/progress-handler";
import { VideoQuiz } from "../../../components/quizset/video";

export default function Einleitungsvideo() {
    return (
        <>
        <ProgressHandler />
            <VideoQuiz
                video="/videos/Zwischen_den_Integralen.mp4"
                title="Einleitungsvideo"
                description="In diesem Einleitungsvideo erfährst du, wie du die Fläche zwischen zwei Funktionen berechnest."
            />
        </>
    )
}