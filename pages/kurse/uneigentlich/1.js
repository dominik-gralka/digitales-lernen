//Einleitungsvideo

import { PenAndPaperModal } from "../../../components/pen-and-paper";
import { ProgressHandler } from "../../../components/progress-handler";
import { VideoQuiz } from "../../../components/quizset/video";

export default function Einleitungsvideo() {
    return (
        <>
        <ProgressHandler />
            <VideoQuiz
                video="/videos/Uneigentlich.mp4"
                title="Einleitungsvideo"
                description="In diesem Einleitungsvideo erfährst du, was passiert, wenn du eine Funktion bis zur Unendlichkeit integrierst."
            />
        </>
    )
}