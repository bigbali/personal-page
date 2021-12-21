import { Link } from 'react-router-dom';
import technologies from '../../data/technologies';
import projects from '../../data/projects';
import SVGOpenExternal from '../../components/SVGOpenExternal';
import Expandable from '../../components/Expandable';
import { AnchorExternal as AE } from '../../components/AnchorExternal';
import './AboutPage.style.scss';

const Tech = () => {

}
// FIX: no space between AE and text

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
                My passions lie mainly in computer science and photography.
                Other than that, I am fascinated by various subjects, including, but not exclusively:
                psychology, history, culture, technology, cars, and of course, cats! How could I not like cats?!
                Worry not though, cats are not my only friends. I also like dogs and chickens.
                Generally speaking, if it's an animal, I like it. In my free time,
                I either spend my time learning, watching movies, playing video games,
                just simply writing code, or sometimes I whip out my camera and start shooting.
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
            <p>
                I was born in the town of
                <AE to="https://en.wikipedia.org/wiki/Gheorgheni">Gheorgheni.</AE>&nbsp;
                This is also where I grew up, between the mountains of Transylvania.
                In high school, I was a nerd. I developed an interest in telling the computer what to do,
                then there I was, writing C# documentation in a notebook and reading it in my free time.
                At this point, I was writing relatively simple applications for desktop, then I introduced myself
                to
                <AE to="https://dotnet.microsoft.com/en-us/apps/aspnet">ASP.NET,</AE>&nbsp;
                and started writing web applications as well, in C#.
                I started seriously investing my time in programming when I finished high school, and I took a course
                named
                <AE to="https://cs50.harvard.edu/x/2021/">CS50.</AE> Here, I learned about
                <AE to="https://en.wikipedia.org/wiki/C_(programming_language)">the C language,</AE>&nbsp;
                Python, Flask and Django, SQL,
            </p>
            <Expandable>
                So, I started learning C#, and made a tool capable of displaying network data. Initially, it was
                a console application, but then I though a UI would be something I'd love to do.
                In the end, not only could it display network data, but you could check if specific ports are open,
                display the geolocation of a domain name (or IP address) and such.
            </Expandable>
        </main>
    )
}

export default AboutPage
