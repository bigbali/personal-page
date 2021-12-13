import technologies from '../../data/technologies';
import projects from '../../data/projects';
import './AboutPage.style.scss';
import { Link } from 'react-router-dom';

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
            >
                Check me out on GitHub
            </a>
            <p>
                I'm an enthusiastic software developer, currently [working as?].
                I have worked with many technologies, brought many ideas to life.
                Feel free to take a look at some of them&nbsp;
                <Link
                    to={"/"}
                    state={{ section: "#portfolio" }}
                >
                    here.
                </Link>
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
