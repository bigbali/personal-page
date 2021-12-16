import { Link } from 'react-router-dom';
import technologies from '../../data/technologies';
import projects from '../../data/projects';
import SVGOpenExternal from '../../components/SVGOpenExternal';
import Expandable from '../../components/Expandable';
import './AboutPage.style.scss';

const Tech = () => {

}

const TechList = ({ stack }) => {
    return stack.map(tech => {
        return (
            <span>

            </span>
        )
    })
}

const AboutPage = () => {
    return (
        <main className="about-page">
            <h1>About me:</h1>
            <a
                href="https://www.github.com/bigbali"
                target="_blank"
                rel="noreferrer"
                className="github-anchor"
            >
                Check me out on GitHub
                <SVGOpenExternal />
            </a>
            <p>
                I'm an enthusiastic software developer, currently [working as?].
                I am familiar with many technologies, and I have given birth to plenty
                of ideas, using plenty of tools differing in form and function.
            </p>
            <Expandable>
                My passions lie mainly in computer science and photography,
                Other than that, I am fascinated by various subjects, including psychology,
                history, and culture. I also appreciate cars a lot.
                ... and of course, I like to play games and watch movies, like many humans of this era.
            </Expandable>
            <h2>
                My workflow:
            </h2>
            <p>
                For ideal performance and efficiency, planning is not optional.
                So, when starting a project, first I think about what I want it to accomplish,
                how it is supposed to look like, and how it should work.
            </p>
            <h2>
                My story:
            </h2>
            <p>
                AAAAAAAAAA
            </p>
        </main>
    )
}

export default AboutPage
