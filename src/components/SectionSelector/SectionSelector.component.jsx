import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import './SectionSelector.style.scss';

const SectionSelector = ({ sections, observe }) => {
    const [currentSection, setCurrentSection] = useState(sections?.[0] || null);
    const autoScrollSection = useLocation().state?.section;

    const scrollToSection = (section) => {
        const headerOffset = document.querySelector(".header").scrollHeight;
        const sectionOffset = document.querySelector(section).offsetTop || 0;

        window.scrollTo({
            top: sectionOffset - headerOffset,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        if (observe) {
            // If 'observe', detect when we scroll to another section,
            // and update the current section
            const observerAction = (entries, observe) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const idSelector = "#" + entry.target.id;
                        const classSelector = "." + entry.target.className;

                        // Works both with IDs and classes, but ID is prioritized
                        sections?.forEach((section) => {
                            if (section.id === idSelector
                                || section.class === classSelector) {
                                setCurrentSection(section)
                            }
                        })
                    }
                })
            }

            const observer = new IntersectionObserver(observerAction, {
                root: null,
                rootMargin: '0px',
                threshold: 0.6
            });

            sections?.forEach(section => {
                // For each section, add an observer
                observer.observe(document.querySelector(section.id || section.class))
            })
        }
    }, [sections, observe])

    useEffect(() => {
        // If we pass through history an id or class of a section, we'll try to scroll to it
        if (autoScrollSection) {
            scrollToSection(autoScrollSection);
        }
    }, [autoScrollSection])

    const renderSectionAnchors = () => {
        return sections?.map(section => {
            const sectionSelector = section.id || section.class;
            return (
                <span key={sectionSelector}
                    className={section === currentSection
                        ? "active"
                        : ""}
                    data-title={section.title ?? ""}
                    onClick={() => {
                        scrollToSection(sectionSelector);

                        // If observe is false, just select section.
                        // Else, it will be done using IntersectionObserver.
                        observe ?? setCurrentSection(section);
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