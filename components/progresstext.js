import { Overview } from "../pages/kurse/overview";

export const ProgressText = ({ kurs, section }) => {
    // Progress Text
    const info = Overview[kurs];
    return (
        <span className="text-sm pb-2">{ info.title } · Lektion { section } von { info.sections }</span>
    )
}