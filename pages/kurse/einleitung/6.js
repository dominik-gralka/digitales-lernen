//Einleitungsvideo

import { PenAndPaperModal } from "../../../components/pen-and-paper";
import { ProgressHandler } from "../../../components/progress-handler";
import { VideoQuiz } from "../../../components/quizset/video";

export default function Einleitungsvideo() {
    return (
        <>
        <ProgressHandler />
            <VideoQuiz
                video="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                title="Praktische Anwendungsmöglichkeiten"
                description="In diesem Video lernst du, wie du die Integralrechnung in der Praxis anwenden kannst."
            />
        </>
    )
}