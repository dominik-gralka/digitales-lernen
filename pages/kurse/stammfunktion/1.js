//Einleitungsvideo

import { PenAndPaperModal } from "../../../components/pen-and-paper";
import { ProgressHandler } from "../../../components/progress-handler";
import { VideoQuiz } from "../../../components/quizset/video";

export default function Einleitungsvideo() {
    return (
        <>
        <ProgressHandler />
            <VideoQuiz
                video="/videos/Stammfunktion.mp4"
                title="Einleitungsvideo"
                description="Das Bilden der Stammfunktion ist ein integraler Bestandteil (no pun intended) der Integralrechnung. Erfahre hier, wie du die Stammfunktion von Funktionen berechnen kannst."
            />
        </>
    )
}