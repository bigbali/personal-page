import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './WelcomeOverlay.style.scss';

/** Displays an animated overlay on first visit. */
const WelcomeOverlay = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const wrapper = useRef();

    useEffect(() => {
        const hasVisited = JSON.parse(localStorage.getItem("hasVisited"));

        if (!hasVisited) {
            localStorage.setItem("hasVisited", "true");
            setIsExpanded(true);
        }
    }, [])

    useEffect(() => {
        if (isExpanded) {
            const query = gsap.utils.selector(wrapper);
            let tl = gsap.timeline();

            // GSAP animation
            tl.to(query(".hi"), {
                opacity: 1,
                duration: 0.4,
                delay: 0.5
            })
                .to(query(".hi"), {
                    opacity: 0,
                    duration: 0.6,
                    delay: 2
                })
                .to(query(".me"), {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.5,
                    ease: "power1.out"
                })
                .to(query(".me .name .animated"), {
                    y: "-100%",
                    opacity: 0,
                    duration: 1,
                    delay: 2,
                    ease: "sine.in"
                })
                .to(query(".me .profession .animated"), {
                    y: "-100%",
                    opacity: 1,
                    duration: 1,
                    delay: -0.2,
                    ease: "sine.out"
                })
                .to(query(".do"), {
                    y: "-4rem",
                    opacity: 1,
                    duration: 1,
                    delay: 2,
                    ease: "power1.out"
                })
        }
    }, [isExpanded])

    window.reset = () => {
        localStorage.setItem("hasVisited", "false");
        setIsExpanded((expanded) => {
            if (expanded) {
                window.location.reload();
            }

            return true
        });
    }

    if (!isExpanded) return null

    return (
        <div className="welcome-overlay">
            <div ref={wrapper} className="wrapper">
                <span className="hi">
                    hi!
                </span>
                <span className="me">
                    <span className="name">
                        <span className="im">
                            I'm
                        </span>
                        <span className="animated">
                            &nbsp;Balázs.
                        </span>
                    </span>
                    <span className="profession">
                        <span className="im">
                            I'm
                        </span>
                        <span className="animated">
                            &nbsp;an artist.
                        </span>
                    </span>
                </span>
                <span className="do">
                    I code your imagination into reality.
                </span>
            </div>
        </div>
    )
}

export default WelcomeOverlay
