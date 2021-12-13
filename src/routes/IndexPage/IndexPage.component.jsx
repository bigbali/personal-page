import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import BGVid1 from '../../media/mp4/1.mp4';
import PortfolioGrid from '../../components/PortfolioGrid';
import SectionSelector from '../../components/SectionSelector';
import './IndexPage.style.scss';

const sections = [
    {
        id: "#animated",
        class: ".animated",
        title: "Landing"
    },
    {
        id: "#portfolio",
        class: ".portfolio",
        title: "See My Work"
    },
    {
        id: "#contact",
        class: ".contact",
        title: "Contact Me"
    }
]

/** Displays an animated overlay on first visit. */
const IndexPage = (props) => {
    const animated = useRef();
    const portfolio = useRef();
    const contact = useRef();

    // Initiate animation when we scroll to portfolio section
    // (based on callback from SectionSelector)
    const sectionCallback = (section) => {
        if (section.id === "#portfolio") {
            const query = gsap.utils.selector(portfolio);
            let tl = gsap.timeline();

            tl.to(query("h1"), {
                opacity: 1,
                x: "0",
                duration: 0.5,
                delay: 0.5,
                ease: "power1.out"
            })

            document.querySelector(".portfolio-grid").childNodes.forEach(node => {
                tl.to(node, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.2,
                    ease: "sine.out"
                })
            })
        }
        else if (section.id === "#contact") {
            const query = gsap.utils.selector(contact);
            let tl = gsap.timeline();

            tl.to(query("h1"), {
                opacity: 1,
                x: "0",
                duration: 0.5,
                delay: 0.5,
                ease: "power1.out"
            })
        }
    }

    useEffect(() => {
        const query = gsap.utils.selector(animated);
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
                callback={sectionCallback}
            />
            <section id="animated" className="animated">
                <div className="video-container">
                    <video autoPlay muted loop>
                        <source src={BGVid1} type="video/mp4"></source>
                    </video>
                </div>
                <div ref={animated} className="wrapper">
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
            <section ref={portfolio} id="portfolio" className="portfolio">
                <h1>See my work:</h1>
                <PortfolioGrid className="card-animation" />
                <a
                    href="https://www.github.com/bigbali"
                    target="_blank"
                    rel="noreferrer"
                    className="mobile-show-more"
                >
                    See more on GitHub
                </a>
            </section>
            <section ref={contact} id="contact" className="contact">
                <h1>Contact me:</h1>
                {/* TODO: Contact form component */}
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button></button>
                </form>
            </section>
        </main>
    )
}

export default IndexPage
