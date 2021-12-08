import { useState, useEffect } from 'react';
import './SectionSelector.style.scss';

const SectionSelector = ({ sections, observe }) => {
    const [currentSection, setCurrentSection] = useState(sections?.[0] || null);

    useEffect(() => {
        // Detect when we scroll to another section,
        // and update the current section
        const observerAction = (entries, observe) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // This solution allows us to use either ids or classes
                    const idSelector = "#" + entry.target.id;
                    const classSelector = "." + entry.target.class;

                    if (sections.includes(idSelector)) {
                        setCurrentSection(idSelector);
                    }
                    else if (sections.includes(classSelector)) {
                        setCurrentSection(classSelector);
                    }
                }
            })
        }

        const observer = new IntersectionObserver(observerAction, {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        });

        observe.forEach(element => {
            // For each element in 'observe', add an observer
            observer.observe(document.querySelector(element))
        })
    }, [sections, observe])

    const renderSectionAnchors = () => {
        return sections?.map(section => {
            return (
                <span key={section}
                    //href={`#${section}`}
                    className={section === currentSection ? "active" : ""}
                    onClick={() => {
                        console.log(section)
                        console.log(currentSection)
                        document.querySelector(section).scrollIntoView(false);
                        setCurrentSection(section);
                    }}
                >
                </span>
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