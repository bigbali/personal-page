import { useState } from 'react';
import './SectionSelector.style.scss';

const SectionSelector = ({ sections }) => {
    const [currentSection, setCurrentSection] = useState(sections?.[0] || null);

    const renderSectionAnchors = () => {
        return sections?.map(section => {
            return (
                <a key={section}
                    href={`#${section}`}>
                </a>
            )
        })
    }

    return (
        <div className="section-selector">
            {renderSectionAnchors()}
        </div>
    )
}

export default SectionSelector