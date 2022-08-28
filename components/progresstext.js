import { Overview } from './overview';
import { SectionSelect } from './section-select';
import { useState } from 'react';

export const ProgressText = ({ kurs, section }) => {
    // Progress Text
    const info = Overview[kurs];
    const maxsections = info.sections;

    const [visible, setVisible] = useState(false);

    if (parseInt(section) > parseInt(maxsections)) {
        return (
            <span className="text-sm pb-2">{info.title} · Ende des Kurses</span>
        )
    }

    if (section == "evaluation") {
        return (
            <span className="text-sm pb-2">{info.title} · Evaluation</span>
        )
    }

    return (
        <div className="pb-2" onClick={ () => setVisible(!visible)}>
            <div className={visible ? '' : 'hidden'}><SectionSelect kurs={ kurs }/></div>
            <span className="text-sm">{info.title} ·
                <span className="ml-2 bg-green-200 p-1 rounded-md text-green-600 font-medium cursor-pointer">Lektion {section} von {info.sections}</span>
            </span>
        </div>
    )
}