import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import BGVid1 from '../../media/mp4/1.mp4';
import PortfolioGrid from '../../components/PortfolioGrid';
import SectionSelector from '../../components/SectionSelector';
import './IndexPage.style.scss';

// const sections = ["#animated", "#portfolio", "#portfolio2"];
const sections = [
    {
        id: "#animated",
        class: ".animated",
        title: "Landing"
    },
    {
        id: "#portfolio",
        class: ".portfolio",
        title: "Example Projects"
    },
    {
        id: "#portfolio2",
        class: ".portfolio2",
        title: "No Content Here Yet"
    }
]

/** Displays an animated overlay on first visit. */
const IndexPage = () => {
    const wrapper = useRef();

    useEffect(() => {
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
    }, [])

    return (
        <main className="index-page">
            <SectionSelector
                sections={sections}
                observe={true}
            />
            <section id="animated" className="animated">
                <div className="video-container">
                    <video autoPlay muted loop>
                        <source src={BGVid1} type="video/mp4"></source>
                    </video>
                </div>
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
            </section>
            <section id="portfolio" className="portfolio">
                <h1>See my work:</h1>
                <PortfolioGrid />
            </section>
            <section id="portfolio2" className="portfolio">

            </section>
        </main>
    )
}

export default IndexPage
