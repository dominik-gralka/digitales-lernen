import { Overview } from './overview';

export const ProgressBar = ({ kurs, section }) => {
    // Progress Text
    const info = Overview[kurs];
    return (
        <progress className="w-full h-1 bg-gray-300" value={ section } max={ info.sections }></progress>
    )
}