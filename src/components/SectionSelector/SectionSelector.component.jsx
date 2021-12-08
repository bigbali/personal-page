import { useState, useEffect } from 'react';
import './SectionSelector.style.scss';

const SectionSelector = ({ sections, observe }) => {
    const [currentSection, setCurrentSection] = useState(sections?.[0] || null);

    useEffect(() => {
        if (observe) {
            // Detect when we scroll to another section,
            // and update the current section
            const observerAction = (entries, observe) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // This solution allows us to use either IDs or classes
                        const idSelector = "#" + entry.target.id;
                        const classSelector = "." + entry.target.className;

                        // Prioritize ID over class (if we have ID, don't bother with class)
                        if (sections?.includes(idSelector)) {
                            setCurrentSection(idSelector);
                        }
                        else if (sections?.includes(classSelector)) {
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

            observe?.forEach(element => {
                // For each element in 'observe', add an observer
                observer.observe(document.querySelector(element))
            })
        }
    }, [sections, observe])

    const renderSectionAnchors = () => {
        return sections?.map(section => {
            return (
                <span key={section}
                    className={section === currentSection
                        ? "active"
                        : ""}
                    onClick={() => {
                        const headerOffset = document.querySelector(".header").scrollHeight;
                        const sectionOffset = document.querySelector(section).offsetTop;

                        window.scrollTo({
                            top: sectionOffset - headerOffset,
                            behavior: "smooth"
                        });
                        observe ?? setCurrentSection(section);
                        // If no array to observe is given, set current on click,
                        // Else, IntersectionObserver will set it automatically
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