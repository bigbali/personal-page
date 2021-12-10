import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import projects from '../../data/projects';
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
            <h1>
                {project.title ?? "Untitled Project"}
            </h1>
            <p>
                {project.longDescription}
            </p>
        </main>
    )
}

export default ProjectPage
