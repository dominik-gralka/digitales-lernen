//Einleitungsvideo

import { PenAndPaperModal } from "../../../components/pen-and-paper";
import { ProgressHandler } from "../../../components/progress-handler";
import { VideoQuiz } from "../../../components/quizset/video";

export default function Einleitungsvideo() {
    return (
        <>
        <ProgressHandler />
            <VideoQuiz
                video="/videos/Ableiten.mp4"
                title="Einleitungsvideo"
                description="Erfrische dein Wissen über das Ableiten von Funktionen."
            />
        </>
    )
}