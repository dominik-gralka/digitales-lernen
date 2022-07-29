import { Overview } from './overview';

export const ProgressText = ({ kurs, section }) => {
    // Progress Text
    const info = Overview[kurs];
    return (
        <span className="text-sm pb-2">{ info.title } · Lektion { section } von { info.sections }</span>
    )
}