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
                video="/videos/Integrieren.mp4"
                title="Einleitungsvideo"
                description="In diesem Video schauen wir uns gemeinsam den innermathematischen Teil der Integralrechnung an."
            />
        </>
    )
}