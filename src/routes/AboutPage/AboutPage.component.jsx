import { useState } from 'react';
import SVGOpenExternal from '../../components/SVGOpenExternal';
import Expandable from '../../components/Expandable';
import { AnchorExternal as AE } from '../../components/AnchorExternal';
import './AboutPage.style.scss';

const AboutPage = () => {
    const [isText, setIsText] = useState(false);

    return (
        <main className={`about-page
            ${isText
                ? "text"
                : "points"
            }`}>
            <div className="aligner">
                <h1>About me:</h1>
                <div className="switch" onClick={() => {
                    setIsText(!isText)
                }}
                >
                    <div>

                    </div>
                </div>
            </div>
            <a
                href="https://www.github.com/bigbali"
                target="_blank"
                rel="noreferrer"
                className="github-anchor"
            >
                Check me out on GitHub
                <SVGOpenExternal />
            </a>
            <div className="text">
                <p>
                    I'm an enthusiastic software developer, currently working as a software developer at
                    <AE to="https://scandiweb.com/">Scandiweb.</AE>
                    I am familiar with many technologies, and I have given birth to plenty
                    of ideas, using plenty of tools differing in form and function.
                </p>
                <Expandable>
                    <p>
                        My passions lie mainly in computer science and photography.
                        Other than that, I am fascinated by various subjects, including, but not exclusively:
                        psychology, history, culture, technology, cars, and of course, cats! How could I not like cats?!
                        Worry not though, cats are not my only friends. I also like dogs and chickens.
                        Generally speaking, if it's an animal, I like it. In my free time,
                        I either spend my time learning, watching movies, playing video games,
                        just simply writing code, or sometimes I whip out my camera and start shooting.
                    </p>
                </Expandable>
                <h2>
                    My workflow:
                </h2>
                <p>
                    For ideal performance and efficiency, planning is not optional.
                    So, when starting a project, first I think about what I want to accomplish
                    and the best way to achieve that. In this process, I consider which tools
                    I should use, and what approaches I should take. Of course, sometimes plans just don't go
                    the way one might expect, and then reconsiderations are in order.
                </p>
                <h2>
                    My story:
                </h2>
                <Expandable caption="Show" captionExpanded="Hide">
                    <p className="story">
                        I was born in the town of
                        <AE to="https://en.wikipedia.org/wiki/Gheorgheni">Gheorgheni,</AE>
                        between the woody wonders of the Transylvanian mountains.
                        Since kindergarten, I was quite an artist. For this reason, I was sent to study art in elementary school,
                        then later I went to study image and text processing at the Technical College of Batthyány Ignác.
                        This is where I started gaining an interest in the art of computer science, and not long after I was already
                        studying C#, writing documentation in a notebook and reading it during pause.
                        My first programs were made for desktop, which included: screen lockers,
                        network discovery tools and a replacement for Windows' default clock.
                        Later, I started developing an appetite for web applications, so I started discovering the wonders of
                        <AE to="https://dotnet.microsoft.com/en-us/apps/aspnet">ASP.NET.</AE>
                        Later, I started studying JavaScript, HTML and CSS, but not much happened until I discovered
                        <AE to="https://cs50.harvard.edu/x/2022/">CS50.</AE>
                        I was amazed by what I learned here, and it was pure joy working on the assignments.
                        Following, I took <AE to="https://cs50.harvard.edu/web/2020/">CS50's Web Programming with Python and JavaScript,</AE>
                        and I've been studying all kinds of stuff ever since.
                    </p>
                </Expandable>
            </div>
            <div className="points">
                <ul>
                    <h2>what i do</h2>
                    <li>nothing</li>
                    <li>im lazy</li>
                    <li>okej no</li>
                    <h2>how i roll</h2>
                    <li>i dont</li>
                    <li>cuz im not a ball</li>
                    <li>he he he</li>
                </ul>
            </div>
        </main>
    )
}

export default AboutPage
