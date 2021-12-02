import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Icon1 from '../../media/svg/decor1.svg';
import Icon2 from '../../media/svg/decor2.svg';
import Icon3 from '../../media/svg/decor3.svg';
import Icon4 from '../../media/svg/decor4.svg';
import Icon5 from '../../media/svg/decor5.svg';
import Icon6 from '../../media/svg/decor6.svg';
import Icon7 from '../../media/svg/decor7.svg';
import Icon8 from '../../media/svg/decor8.svg';
import Icon9 from '../../media/svg/decor9.svg';
import Icon10 from '../../media/svg/decor10.svg';
import Icon11 from '../../media/svg/decor11.svg';
import Icon12 from '../../media/svg/decor12.svg';
import Icon13 from '../../media/svg/decor13.svg';
import Icon14 from '../../media/svg/decor14.svg';
import Icon15 from '../../media/svg/decor15.svg';
import Icon16 from '../../media/svg/decor16.svg';
import Icon17 from '../../media/svg/decor17.svg';
import Icon18 from '../../media/svg/decor18.svg';
import Icon19 from '../../media/svg/decor19.svg';
import Icon20 from '../../media/svg/decor20.svg';
import Icon21 from '../../media/svg/decor21.svg';
import './WelcomeOverlay.style.scss';

/** Displays an animated overlay on first visit. */
const WelcomeOverlay = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const wrapper = useRef();

    const getRandomPosition = () => {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        if (x < 64) x += 96;
        if (x > window.innerWidth - 64) x -= 96;
        if (y < 64) x += 64;
        if (y > window.innerHeight - 64) y -= 64;

        return {
            left: `${x}px`,
            top: `${y}px`
        }
    }

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

            // hi! fade-in
            tl.to(query(".hi"), { opacity: 1, duration: 0.4, delay: 0.5 })
                .to(query(".hi"), { opacity: 0, duration: 0.6, delay: 2 });

            // About section animation
            tl.to(query(".me"), { opacity: 1, duration: 0.5, delay: 0.5, ease: "power1.out" })
                .to(query(".me .name"), { opacity: 1, duration: 0.5, delay: -1, ease: "power1.out" })
                .to(query(".me .name"), { opacity: 0, y: "-100%", duration: 2, delay: 2, ease: "power2.inOut" })
                .to(query(".me .profession"), { opacity: 1, y: 0, duration: 2, delay: -2, ease: "power2.inOut" });

            tl.to(query(".me"), { y: "-50%", duration: 0.8, delay: 2, ease: "power1.inOut" })
                .to(query(".do"), { y: "50%", duration: 0.5, delay: -2, ease: "power1.inOut" })
                .to(query(".do"), { opacity: 1, duration: 1, delay: -0.25, ease: "power1.out" })
        }
    }, [isExpanded])

    window.reset = () => {
        setIsExpanded((prev) => !prev)
    }

    if (!isExpanded) return null

    return (
        <div className="welcome-overlay" ref={wrapper}>
            <span className="hi">
                hi!
            </span>
            <span className="me">
                I'm
                <div className="name">
                    &nbsp;Balázs.
                </div>
                <div className="profession">
                    &nbsp;an artist.
                </div>
            </span>
            <span className="do">
                I code your imagination into reality.
            </span>
            <img src={Icon1} alt="" style={getRandomPosition()} />
            <img src={Icon2} alt="" style={getRandomPosition()} />
            <img src={Icon3} alt="" style={getRandomPosition()} />
            <img src={Icon4} alt="" style={getRandomPosition()} />
            <img src={Icon5} alt="" style={getRandomPosition()} />
            <img src={Icon6} alt="" style={getRandomPosition()} />
            <img src={Icon7} alt="" style={getRandomPosition()} />
            <img src={Icon8} alt="" style={getRandomPosition()} />
            <img src={Icon9} alt="" style={getRandomPosition()} />
            <img src={Icon10} alt="" style={getRandomPosition()} />
            <img src={Icon11} alt="" style={getRandomPosition()} />
            <img src={Icon12} alt="" style={getRandomPosition()} />
            <img src={Icon13} alt="" style={getRandomPosition()} />
            <img src={Icon14} alt="" style={getRandomPosition()} />
            <img src={Icon15} alt="" style={getRandomPosition()} />
            <img src={Icon16} alt="" style={getRandomPosition()} />
            <img src={Icon17} alt="" style={getRandomPosition()} />
            <img src={Icon18} alt="" style={getRandomPosition()} />
            <img src={Icon19} alt="" style={getRandomPosition()} />
            <img src={Icon20} alt="" style={getRandomPosition()} />
            <img src={Icon21} alt="" style={getRandomPosition()} />
        </div>
    )
}

export default WelcomeOverlay
