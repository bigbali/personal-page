import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import projects from '../../data/projects';
import SVGOpenExternal from '../../components/SVGOpenExternal/SVGOpenExternal.component';
import './ProjectPage.style.scss';

const ProjectPage = ({ from }) => {
    const slug = useParams().slug;
    const project = projects.find(project => project.slug === slug);

    if (!project) return <div>
        Doesnt exist yo
    </div>

    return (
        <main className="project-page">
            <Link
                to={"/"}
                state={{ section: "#portfolio" }}
                className="back-anchor"
            >
                <span className="arrow-left">
                </span>
                <span className="text">
                    Back to Projects
                </span>
            </Link>
            <div className="project-wrapper">
                <section className="data-section">
                    <h1>
                        {project.title ?? "Untitled Project"}
                    </h1>
                    <a
                        href={project.repository}
                        target="_blank"
                        rel="noreferrer"
                        className="repository"
                    >
                        {project.repository}
                        <SVGOpenExternal />
                    </a>
                    <p>
                        {project.longDescription}
                    </p>
                </section>
                <section className="visual-section">
                    <img src={project.image} alt={project.title} />
                </section>
            </div>
        </main>
    )
}

export default ProjectPage
